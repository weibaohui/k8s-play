import os from 'node:os'
import process from 'node:process'
import { Stream } from 'node:stream'
import * as stream from 'node:stream'
import { IPty } from 'node-pty'
import * as pty from 'node-pty'
import { TerminalData } from '@main/watch/watch.model'
import { LogOptions } from '@kubernetes/client-node/dist/log'
import { V1Status } from '@kubernetes/client-node/dist/api'
import { Injectable, Logger } from '@nestjs/common'
import * as k8s from '@kubernetes/client-node'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class WatchService {
  private readonly logger = new Logger(WatchService.name)
  private ptyMap = new Map<string, IPty>()

  constructor(
    private configService: ConfigService,
  ) {
  }

  private kc = new k8s.KubeConfig()

  async PodWatcher(cb?: (d: any) => void) {
    this.watch('pod', cb)
  }

  async NsWatcher(cb?: (d: any) => void) {
    this.watch('ns', cb)
  }

  private watch(resType: string, cb?: (d: any) => void) {
    const watchAPI = this.getResourceWatchPath(resType)
    const kc = this.getKubeConfig()
    const watch = new k8s.Watch(kc)
    watch.watch(`${watchAPI}`,
      // optional query parameters can go here.
      {
        allowWatchBookmarks: true,
      },
      // callback is called for each received object.
      (type, apiObj, watchObj) => {
        cb(watchObj)
        // if (type === 'ADDED') {
        //   // tslint:disable-next-line:no-console
        //   // console.log('new object:')
        // }
        // else if (type === 'MODIFIED') {
        //   // tslint:disable-next-line:no-console
        //   // console.log('changed object:')
        // }
        // else if (type === 'DELETED') {
        //   // tslint:disable-next-line:no-console
        //   // console.log('deleted object:')
        // }
        // else if (type === 'BOOKMARK') {
        //   // tslint:disable-next-line:no-console
        //   // console.log(`bookmark: ${watchObj.metadata.resourceVersion}`)
        // }
        // else {
        //   // tslint:disable-next-line:no-console
        //   // console.log(`unknown type: ${type}`)
        // }
        // this.eventsGateway.sendPod(watchObj)
      },
      // done callback is called if the watch terminates normally
      (err) => {
        // tslint:disable-next-line:no-console
        console.log(err)
      }).then(() => {
    })
  }

  /**
   * 获取监控资源的访问地址
   * @private
   * @param resType
   */
  private getResourceWatchPath(resType: String) {
    switch (resType) {
      case 'pod' || 'pods' :
        resType = 'pods'
        break
      case 'deploy' || 'deployments' || 'deployment':
        resType = 'deployments'
        break
      case 'ns' || 'namespaces' || 'namespace':
        resType = 'namespaces'
        break
      default:
        resType = 'pods'
    }
    return `/api/v1/${resType}`
  }

  public getKubeConfig() {
    const home = process.env.HOME || process.env.USERPROFILE
    this.kc.loadFromFile(`${home}/.kube/config`)
    return this.kc
  }

  async k8sPods(ns?: string) {
    const k8sApi = this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
    if (!ns || ns === 'null') {
      const podAllResp = await k8sApi.listPodForAllNamespaces()
      return podAllResp.body.items
    }
    const podResp = await k8sApi.listNamespacedPod(ns)
    return podResp.body.items
  }

  async getPod(ns: string, name: string) {
    const k8sApi = this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
    const podResp = await k8sApi.readNamespacedPod(name, ns)
    return podResp.body
  }

  async getNodes() {
    const k8sApi = this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
    const podResp = await k8sApi.listNode()
    return podResp.body.items
  }

  async getNode(name: string) {
    const k8sApi = this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
    const podResp = await k8sApi.readNode(name)
    return podResp.body
  }

  async k8sNs() {
    const k8sApi = this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
    const res = await k8sApi.listNamespace()
    return res.body.items
  }

  async events(ns?: string) {
    const k8sApi = this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
    if (!ns || ns === 'null' || ns === 'undefined') {
      const eventsAll = await k8sApi.listEventForAllNamespaces()
      return eventsAll.body.items
    }
    const events = await k8sApi.listNamespacedEvent(ns)
    return events.body.items
  }

  async deletePods(name: string, ns: string) {
    const k8sApi = this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
    const r = await k8sApi.deleteNamespacedPod(name, ns)
    return r.body
  }

  async logPods(namespace: string, podName: string, containerName: string, options?: LogOptions) {
    const log = new k8s.Log(this.getKubeConfig())
    const logStream = new Stream.PassThrough()

    logStream.on('data', (chunk) => {
      process.stdout.write(chunk)
    })
    await log.log(namespace, podName, containerName, logStream, options)
  }

  async execPod(namespace: string, podName: string, containerName: string, command: string | string[], stdout: stream.Writable | null, stderr: stream.Writable | null, stdin: stream.Readable | null, tty: boolean, statusCallback?: (status: V1Status) => void) {
    const exec = new k8s.Exec(this.getKubeConfig())
    const ws = await exec.exec(namespace, podName, containerName, command, stdout, stderr, stdin, tty, statusCallback)
    return ws
  }

  async getPodLogs(podTerminal: TerminalData, cb: (d: string) => void, options?: LogOptions) {
    const log = new k8s.Log(this.getKubeConfig())
    const logStream = new Stream.PassThrough()

    logStream.on('data', (chunk) => {
      cb(chunk.toString())
    })
    await log.log(podTerminal.ns, podTerminal.name, podTerminal.containerName, logStream, options)
  }

  getKubectlPty(podTerminal: TerminalData, cb: (d: string) => void) {
    const key = `${podTerminal.ns}/${podTerminal.name}/${podTerminal.containerName}`
    if (this.ptyMap.has(key))
      return this.ptyMap.get(key)

    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'

    const pk = pty.spawn(shell, [], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env,
    })
    pk.onData((d) => {
      cb(d.toString())
    })

    pk.write(`kubectl exec -i -t -n ${podTerminal.ns} ${podTerminal.name} -c ${podTerminal.containerName} -- sh -c "clear; (bash || ash || zsh || sh)"\r`)
    this.ptyMap.set(key, pk)
    return this.ptyMap.get(key)
  }

  resizeKubectlPty(podTerminal: TerminalData, cb?: () => void) {
    const key = `${podTerminal.ns}/${podTerminal.name}/${podTerminal.containerName}`
    if (this.ptyMap.has(key)) {
      const pk = this.ptyMap.get(key)
      pk.resize(podTerminal.columns, podTerminal.rows)
      cb?.()
    }
  }
}
