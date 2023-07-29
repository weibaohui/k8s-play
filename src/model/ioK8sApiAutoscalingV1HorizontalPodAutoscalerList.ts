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
import type { IoK8sApiAutoscalingV1HorizontalPodAutoscaler } from './ioK8sApiAutoscalingV1HorizontalPodAutoscaler'
import type { V1ListMeta } from './V1ListMeta'

/**
 * list of horizontal pod autoscaler objects.
 */
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerList {
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * items is the list of horizontal pod autoscaler objects.
     */
  items: Array<IoK8sApiAutoscalingV1HorizontalPodAutoscaler>
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * Standard list metadata.
     */
  metadata?: V1ListMeta
}
