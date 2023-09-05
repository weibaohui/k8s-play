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
import type { V1RollingUpdateDeployment } from './v1RollingUpdateDeployment'

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export class V1DeploymentStrategy {
  /**
     * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
     */
  rollingUpdate?: V1RollingUpdateDeployment
  /**
     * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
     */
  type?: string
}
