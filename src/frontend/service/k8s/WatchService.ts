import type { V1CronJob } from '@backend/k8s/model/v1CronJob'
import type { V1Deployment } from '@backend/k8s/model/V1Deployment'
import type { V1Job } from '@backend/k8s/model/v1Job'
import type { V1LimitRange } from '@backend/k8s/model/V1LimitRange'
import type { V1PodDisruptionBudget } from '@backend/k8s/model/v1PodDisruptionBudget'
import type { V1ReplicaSet } from '@backend/k8s/model/V1ReplicaSet'
import type { V1ReplicationController } from '@backend/k8s/model/V1ReplicationController'
import type { V1ResourceQuota } from '@backend/k8s/model/V1ResourceQuota'
import type { V1Service } from '@backend/k8s/model/V1Service'
import type { V1StatefulSet } from '@backend/k8s/model/v1StatefulSet'
import type { V2HorizontalPodAutoscaler } from '@backend/k8s/model/v2HorizontalPodAutoscaler'
import type { ResType } from '@backend/k8s/watch/watch.model'
import type { Ref } from 'vue'
import { WorkloadArray } from '@backend/utils/WorkloadArray'
import type { V1Event } from '@backend/k8s/model/V1Event'
import type { V1Namespace } from '@backend/k8s/model/V1Namespace'
import type { V1Node } from '@backend/k8s/model/V1Node'
import type { V1Pod } from '@backend/k8s/model/V1Pod'
import { SocketIOService } from '@frontend/service/k8s/SocketIOService'

export class WatchService {
  /**
   * 监控变化
   * @param list
   * @param type
   * @param ns ,可选
   */
  async watchChange<T extends V1Pod | V1Service | V1PodDisruptionBudget | V2HorizontalPodAutoscaler | V1LimitRange | V1Node | V1ResourceQuota | V1Event | V1CronJob | V1Namespace | V1ReplicaSet | V1Deployment | V1ReplicationController | V1StatefulSet | V1Job>(list: Ref<T[]>, type: ResType, ns?: Ref<string>) {
    const socket = SocketIOService.instance.getSocket()
    console.log(`socket-io-${type}`, socket.active)
    socket.emit('watch-init', 'start')
    socket.on(`events-${type}`, (data) => {
      // 处理接收到的数据
      const p: T = data.object as T
      if (!type.toString().startsWith(p.kind))
        return

      if (ns && ns.value && p.metadata.namespace !== ns.value)
        return

      const wa = new WorkloadArray<T>()
      switch (data.type) {
        case 'MODIFIED':
          console.log('MODIFIED', p)
          wa.Update(list.value, p)
          break
        case 'ADDED':
          console.log('ADDED', p)
          wa.Add(list.value, p)
          break
        case 'DELETED':
          console.log('DELETED', p)
          wa.Delete(list.value, p)
          break
      }
    })
  }
}
