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
import type { IoK8sApimachineryPkgUtilIntstrIntOrString } from './ioK8sApimachineryPkgUtilIntstrIntOrString'

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export class V1TCPSocketAction {
  /**
     * Optional: Host name to connect to, defaults to the pod IP.
     */
  host?: string
  /**
     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
  port: IoK8sApimachineryPkgUtilIntstrIntOrString
}
