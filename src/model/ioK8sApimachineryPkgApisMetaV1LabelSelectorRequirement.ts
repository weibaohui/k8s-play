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
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement {
  /**
     * key is the label key that the selector applies to.
     */
  key: string
  /**
     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     */
  operator: string
  /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     */
  values?: Array<string>
}
