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
import type { IoK8sApimachineryPkgApisMetaV1Time } from './ioK8sApimachineryPkgApisMetaV1Time'

/**
 * PodCondition contains details for the current condition of this pod.
 */
export interface V1PodCondition {
  /**
     * Last time we probed the condition.
     */
  lastProbeTime?: IoK8sApimachineryPkgApisMetaV1Time
  /**
     * Last time the condition transitioned from one status to another.
     */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time
  /**
     * Human-readable message indicating details about last transition.
     */
  message?: string
  /**
     * Unique, one-word, CamelCase reason for the condition's last transition.
     */
  reason?: string
  /**
     * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     */
  status: string
  /**
     * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     */
  type: string
}
