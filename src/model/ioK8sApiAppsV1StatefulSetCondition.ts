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
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export interface IoK8sApiAppsV1StatefulSetCondition {
  /**
     * Last time the condition transitioned from one status to another.
     */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time
  /**
     * A human readable message indicating details about the transition.
     */
  message?: string
  /**
     * The reason for the condition's last transition.
     */
  reason?: string
  /**
     * Status of the condition, one of True, False, Unknown.
     */
  status: string
  /**
     * Type of statefulset condition.
     */
  type: string
}
