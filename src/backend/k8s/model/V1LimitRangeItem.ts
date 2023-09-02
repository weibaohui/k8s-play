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
import type { ResourceQuantity } from './resourceQuantity'

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export interface V1LimitRangeItem {
  /**
     * Default resource requirement limit value by resource name if resource limit is omitted.
     */
  _default?: { [key: string]: ResourceQuantity }
  /**
     * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
     */
  defaultRequest?: { [key: string]: ResourceQuantity }
  /**
     * Max usage constraints on this kind by resource name.
     */
  max?: { [key: string]: ResourceQuantity }
  /**
     * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
     */
  maxLimitRequestRatio?: { [key: string]: ResourceQuantity }
  /**
     * Min usage constraints on this kind by resource name.
     */
  min?: { [key: string]: ResourceQuantity }
  /**
     * Type of resource that this limit applies to.
     */
  type: string
}
