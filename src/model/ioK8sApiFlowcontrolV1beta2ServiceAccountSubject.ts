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
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export interface IoK8sApiFlowcontrolV1beta2ServiceAccountSubject {
  /**
     * `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
     */
  name: string
  /**
     * `namespace` is the namespace of matching ServiceAccount objects. Required.
     */
  namespace: string
}
