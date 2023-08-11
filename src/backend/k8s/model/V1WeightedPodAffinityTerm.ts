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
import type { V1PodAffinityTerm } from './V1PodAffinityTerm'

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export interface V1WeightedPodAffinityTerm {
  /**
     * Required. A pod affinity term, associated with the corresponding weight.
     */
  podAffinityTerm: V1PodAffinityTerm
  /**
     * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
     */
  weight: number
}