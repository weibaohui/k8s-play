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
import type { V1ObjectFieldSelector } from './V1ObjectFieldSelector'
import type { V1ResourceFieldSelector } from './V1ResourceFieldSelector'

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export interface V1DownwardAPIVolumeFile {
  /**
     * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
     */
  fieldRef?: V1ObjectFieldSelector
  /**
     * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
  mode?: number
  /**
     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
     */
  path: string
  /**
     * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
     */
  resourceFieldRef?: V1ResourceFieldSelector
}
