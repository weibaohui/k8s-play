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
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export interface IoK8sApiAutoscalingV2CrossVersionObjectReference {
  /**
     * apiVersion is the API version of the referent
     */
  apiVersion?: string
  /**
     * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind: string
  /**
     * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
  name: string
}
