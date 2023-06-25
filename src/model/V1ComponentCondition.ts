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
 * Information about the condition of a component.
 */
export interface V1ComponentCondition {
  /**
     * Condition error code for a component. For example, a health check error code.
     */
  error?: string
  /**
     * Message about the condition for a component. For example, information about a health check.
     */
  message?: string
  /**
     * Status of the condition for a component. Valid values for \"Healthy\": \"True\", \"False\", or \"Unknown\".
     */
  status: string
  /**
     * Type of condition for a component. Valid value: \"Healthy\"
     */
  type: string
}
