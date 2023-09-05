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
import type { V1Time } from './V1Time'

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition {
  /**
     * lastTransitionTime last time the condition transitioned from one status to another.
     */
  lastTransitionTime?: V1Time
  /**
     * message is a human-readable message indicating details about last transition.
     */
  message?: string
  /**
     * reason is a unique, one-word, CamelCase reason for the condition's last transition.
     */
  reason?: string
  /**
     * status is the status of the condition. Can be True, False, Unknown.
     */
  status: string
  /**
     * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
     */
  type: string
}
