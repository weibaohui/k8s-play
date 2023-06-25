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
import type { IoK8sApiNetworkingV1IngressClassParametersReference } from './ioK8sApiNetworkingV1IngressClassParametersReference'

/**
 * IngressClassSpec provides information about the class of an Ingress.
 */
export interface IoK8sApiNetworkingV1IngressClassSpec {
  /**
     * controller refers to the name of the controller that should handle this class. This allows for different \"flavors\" that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. \"acme.io/ingress-controller\". This field is immutable.
     */
  controller?: string
  /**
     * parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.
     */
  parameters?: IoK8sApiNetworkingV1IngressClassParametersReference
}
