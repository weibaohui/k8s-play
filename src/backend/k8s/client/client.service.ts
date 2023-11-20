import os from 'node:os'
import process from 'node:process'
import fs from 'node:fs'
import path from 'node:path'
import { KubeConfig } from '@backend/model/KubeConfig'
import { KubernetesObject } from '@kubernetes/client-node'
import * as k8s from '@kubernetes/client-node'
import { Injectable, Logger } from '@nestjs/common'
import * as pty from 'node-pty'
import YAML from 'yaml'

@Injectable()
export class ClientService {
  private readonly logger = new Logger(ClientService.name)
  private kc = new k8s.KubeConfig()
  private kubeConfigList: Map<string, string> = new Map<string, string>()
  public autoLoadKubeConfig() {
    const defaultHome = process.env.HOME || process.env.USERPROFILE
    const folderPath = `${defaultHome}/.kube`
    const items = fs.readdirSync(folderPath)
    items.forEach((item) => {
      const itemPath = path.join(folderPath, item)
      const stats = fs.statSync(itemPath)
      if (stats.isFile()) {
        const data = fs.readFileSync(`${folderPath}/${item}`, 'utf8')
        const x: KubeConfig = YAML.parse(data)
        const key = x['current-context']
        this.kubeConfigList.set(key, data)
      }
    })
  }

  public getKubeConfigByContext(key: string) {
    this.autoLoadKubeConfig()
    this.kc.loadFromString(this.kubeConfigList.get(key))
  }

  public getKubeConfig() {
    if (process.env.inCluster) {
      this.kc.loadFromCluster()
      return this.kc
    }

    const home = process.env.HOME || process.env.USERPROFILE
    this.kc.loadFromFile(`${home}/.kube/config`)
    return this.kc
  }

  public getClusters() {
    return this.getKubeConfig().getClusters()
  }

  public getCurrentContext() {
    return this.getKubeConfig().currentContext
  }

  public setContext(name) {
    this.getKubeConfig().setCurrentContext(name)
  }

  public getAppsV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.AppsV1Api)
  }

  public getCoreV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.CoreV1Api)
  }

  public getAutoScalingV2Api() {
    return this.getKubeConfig().makeApiClient(k8s.AutoscalingV2Api)
  }

  public getBatchV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.BatchV1Api)
  }

  public getStorageV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.StorageV1Api)
  }

  public getPolicyV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.PolicyV1Api)
  }

  public getObjectApi() {
    return this.getKubeConfig().makeApiClient(k8s.KubernetesObjectApi)
  }

  public getNetworkingV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.NetworkingV1Api)
  }

  public getRbacAuthorizationV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.RbacAuthorizationV1Api)
  }

  public getAdmissionregistrationV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.AdmissionregistrationV1Api)
  }

  public getDiscoveryV1Api() {
    return this.getKubeConfig().makeApiClient(k8s.DiscoveryV1Api)
  }

  public getNodePty() {
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'

    return pty.spawn(shell, [], {
      name: 'xterm-256color',
      cols: 80,
      rows: 30,
      env: process.env,
      cwd: process.cwd(),
    })
  }

  /**
   * 执行驱逐命令
   * @param nodeName
   * @param cb
   */
  execKubectlDrainNode(nodeName: string, cb: (d: string) => void) {
    const pk = this.getNodePty()
    pk.onData((d) => {
      cb(d.toString())
    })
    setTimeout(() => {
      pk.write(`clear;kubectl drain ${nodeName} --delete-emptydir-data --ignore-daemonsets --force \r`)
    }, 1000)
    return pk
  }

  async update(k8sObject: KubernetesObject) {
    const k8sApi = this.getObjectApi()
    const r = await k8sApi.replace(k8sObject)
    return r.body
  }
}
