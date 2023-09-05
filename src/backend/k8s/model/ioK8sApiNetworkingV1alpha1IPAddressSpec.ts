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
import type { IoK8sApiNetworkingV1alpha1ParentReference } from './ioK8sApiNetworkingV1alpha1ParentReference'

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export class IoK8sApiNetworkingV1alpha1IPAddressSpec {
  /**
     * ParentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object.
     */
  parentRef?: IoK8sApiNetworkingV1alpha1ParentReference
}
