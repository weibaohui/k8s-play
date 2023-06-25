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
import type { V1ResourceQuota } from './V1ResourceQuota'
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './ioK8sApimachineryPkgApisMetaV1ListMeta'

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export interface V1ResourceQuotaList {
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     */
  items: Array<V1ResourceQuota>
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta
}
