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
import type { V1NodeSelector } from './V1NodeSelector'
import type { IoK8sApiResourceV1alpha2ResourceClassParametersReference } from './ioK8sApiResourceV1alpha2ResourceClassParametersReference'
import type { V1ObjectMeta } from './V1ObjectMeta'

/**
 * ResourceClass is used by administrators to influence how resources are allocated.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IoK8sApiResourceV1alpha2ResourceClass {
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * DriverName defines the name of the dynamic resource driver that is used for allocation of a ResourceClaim that uses this class.  Resource drivers have a unique name in forward domain order (acme.example.com).
     */
  driverName: string
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * Standard object metadata
     */
  metadata?: V1ObjectMeta
  /**
     * ParametersRef references an arbitrary separate object that may hold parameters that will be used by the driver when allocating a resource that uses this class. A dynamic resource driver can distinguish between parameters stored here and and those stored in ResourceClaimSpec.
     */
  parametersRef?: IoK8sApiResourceV1alpha2ResourceClassParametersReference
  /**
     * Only nodes matching the selector will be considered by the scheduler when trying to find a Node that fits a Pod when that Pod uses a ResourceClaim that has not been allocated yet.  Setting this field is optional. If null, all nodes are candidates.
     */
  suitableNodes?: V1NodeSelector
}
