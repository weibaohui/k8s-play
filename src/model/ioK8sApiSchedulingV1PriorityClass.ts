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
import type { V1ObjectMeta } from './V1ObjectMeta'

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export interface IoK8sApiSchedulingV1PriorityClass {
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
     */
  description?: string
  /**
     * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
     */
  globalDefault?: boolean
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
  metadata?: V1ObjectMeta
  /**
     * preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
     */
  preemptionPolicy?: string
  /**
     * value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
     */
  value: number
}
