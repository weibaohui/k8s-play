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
import type { V1ConfigMapEnvSource } from './V1ConfigMapEnvSource'
import type { V1SecretEnvSource } from './V1SecretEnvSource'

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export class V1EnvFromSource {
  /**
     * The ConfigMap to select from
     */
  configMapRef?: V1ConfigMapEnvSource
  /**
     * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
     */
  prefix?: string
  /**
     * The Secret to select from
     */
  secretRef?: V1SecretEnvSource
}
