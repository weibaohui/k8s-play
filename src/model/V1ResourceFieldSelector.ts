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
import type { IoK8sApimachineryPkgApiResourceQuantity } from './ioK8sApimachineryPkgApiResourceQuantity'

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export interface V1ResourceFieldSelector {
  /**
     * Container name: required for volumes, optional for env vars
     */
  containerName?: string
  /**
     * Specifies the output format of the exposed resources, defaults to \"1\"
     */
  divisor?: IoK8sApimachineryPkgApiResourceQuantity
  /**
     * Required: resource to select
     */
  resource: string
}
