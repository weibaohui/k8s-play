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

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference {
  /**
     * name is the name of the service. Required
     */
  name: string
  /**
     * namespace is the namespace of the service. Required
     */
  namespace: string
  /**
     * path is an optional URL path at which the webhook will be contacted.
     */
  path?: string
  /**
     * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
     */
  port?: number
}
