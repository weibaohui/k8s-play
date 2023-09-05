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
import type { IoK8sApiNetworkingV1ServiceBackendPort } from './ioK8sApiNetworkingV1ServiceBackendPort'

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export class V1IngressServiceBackend {
  /**
     * name is the referenced service. The service must exist in the same namespace as the Ingress object.
     */
  name: string
  /**
     * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
     */
  port?: IoK8sApiNetworkingV1ServiceBackendPort
}