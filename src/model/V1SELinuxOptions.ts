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
 * SELinuxOptions are the labels to be applied to the container
 */
export interface V1SELinuxOptions {
  /**
     * Level is SELinux level label that applies to the container.
     */
  level?: string
  /**
     * Role is a SELinux role label that applies to the container.
     */
  role?: string
  /**
     * Type is a SELinux type label that applies to the container.
     */
  type?: string
  /**
     * User is a SELinux user label that applies to the container.
     */
  user?: string
}
