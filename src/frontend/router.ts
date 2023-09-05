import CmListView from '@frontend/components/configmap/CmListView.vue'
import CronJobListView from '@frontend/components/cronjob/CronJobListView.vue'
import DsListView from '@frontend/components/daemonset/DsListView.vue'
import DeployListView from '@frontend/components/deployment/DeployListView.vue'
import EpListView from '@frontend/components/endpoint/EpListView.vue'
import HpaListView from '@frontend/components/HorizontalPodAutoscaler/HpaListView.vue'
import JobListView from '@frontend/components/job/JobListView.vue'
import LimitsListView from '@frontend/components/limitrange/LimitsListView.vue'
import PdbListView from '@frontend/components/PodDisruptionBudget/PdbListView.vue'
import PcListView from '@frontend/components/priorityclass/PcListView.vue'
import RcListView from '@frontend/components/replicacontroller/RcListView.vue'
import RsListView from '@frontend/components/replicaset/RsListView.vue'
import QuotaListView from '@frontend/components/resourcequota/QuotaListView.vue'
import SecretListView from '@frontend/components/secret/SecretListView.vue'
import StsListView from '@frontend/components/statefulset/StsListView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@frontend/components/event/EventListView.vue'
import NodeListView from '@frontend/components/node/NodeListView.vue'
import NsListView from '@frontend/components/ns/NsListView.vue'
import PodListView from '@frontend/components/pod/PodListView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/nodes',
      component: NodeListView,
    },
    {
      path: '/ns',
      component: NsListView,
    },
    {
      path: '/pods',
      component: PodListView,
    },
    {
      path: '/events',
      component: EventListView,
    },
    {
      path: '/deployments',
      component: DeployListView,
    },
    {
      path: '/replicaSets',
      component: RsListView,
    },
    {
      path: '/replicationControllers',
      component: RcListView,
    },
    {
      path: '/daemonSets',
      component: DsListView,
    },
    {
      path: '/statefulSets',
      component: StsListView,
    },
    {
      path: '/jobs',
      component: JobListView,
    },
    {
      path: '/cronJobs',
      component: CronJobListView,
    },
    {
      path: '/configMaps',
      component: CmListView,
    },
    {
      path: '/secrets',
      component: SecretListView,
    },
    {
      path: '/priorityClasses',
      component: PcListView,
    }, {
      path: '/resourceQuotas',
      component: QuotaListView,
    }, {
      path: '/limitRanges',
      component: LimitsListView,
    }, {
      path: '/podDisruptionBudgets',
      component: PdbListView,
    },
    {
      path: '/horizontalPodAutoscaler',
      component: HpaListView,
    },
    {
      path: '/endpoints',
      component: EpListView,
    },
  ],
})
