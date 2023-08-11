import { Injectable, Logger } from '@nestjs/common'
import { ClientService } from '@backend/k8s/client/client.service'

@Injectable()
export class ReplicasetService {
  private readonly logger = new Logger(ReplicasetService.name)

  constructor(
    public clientService: ClientService,
  ) {}

  async getReplicaSets(ns?: string) {
    const k8sApi = this.clientService.getAppsV1Api()
    if (!ns || ns === 'null') {
      const res = await k8sApi.listReplicaSetForAllNamespaces()
      return res.body.items
    }
    const podResp = await k8sApi.listNamespacedReplicaSet(ns)
    return podResp.body.items
  }

  async deleteReplicaSet(name: string, ns: string) {
    const k8sApi = this.clientService.getAppsV1Api()
    const r = await k8sApi.deleteNamespacedReplicaSet(name, ns)
    return r.body
  }
}
