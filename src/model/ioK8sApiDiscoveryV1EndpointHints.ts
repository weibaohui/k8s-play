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
import type { IoK8sApiDiscoveryV1ForZone } from './ioK8sApiDiscoveryV1ForZone'

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export interface IoK8sApiDiscoveryV1EndpointHints {
  /**
     * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
     */
  forZones?: Array<IoK8sApiDiscoveryV1ForZone>
}
