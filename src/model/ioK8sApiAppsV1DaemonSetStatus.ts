/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: unversioned
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import type { IoK8sApiAppsV1DaemonSetCondition } from './ioK8sApiAppsV1DaemonSetCondition'

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export interface IoK8sApiAppsV1DaemonSetStatus {
  /**
     * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
     */
  collisionCount?: number
  /**
     * Represents the latest available observations of a DaemonSet's current state.
     */
  conditions?: Array<IoK8sApiAppsV1DaemonSetCondition>
  /**
     * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     */
  currentNumberScheduled: number
  /**
     * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     */
  desiredNumberScheduled: number
  /**
     * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
     */
  numberAvailable?: number
  /**
     * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     */
  numberMisscheduled: number
  /**
     * numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
     */
  numberReady: number
  /**
     * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
     */
  numberUnavailable?: number
  /**
     * The most recent generation observed by the daemon set controller.
     */
  observedGeneration?: number
  /**
     * The total number of nodes that are running updated daemon pod
     */
  updatedNumberScheduled?: number
}
