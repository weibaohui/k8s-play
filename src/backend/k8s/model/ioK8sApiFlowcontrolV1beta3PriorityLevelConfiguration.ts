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
import type { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpec } from './ioK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpec'
import type { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus } from './ioK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus'
import type { V1ObjectMeta } from './V1ObjectMeta'

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export class IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration {
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
  metadata?: V1ObjectMeta
  /**
     * `spec` is the specification of the desired behavior of a \"request-priority\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
  spec?: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpec
  /**
     * `status` is the current status of a \"request-priority\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
  status?: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus
}
