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
 * GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
 */
export class IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery {
  /**
     * groupVersion specifies the API group and version in the form \"group/version\"
     */
  groupVersion: string
  /**
     * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
     */
  version: string
}
