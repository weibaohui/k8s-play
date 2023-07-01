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
import type { V1ConfigMapKeySelector } from './V1ConfigMapKeySelector'
import type { V1ObjectFieldSelector } from './V1ObjectFieldSelector'
import type { V1ResourceFieldSelector } from './V1ResourceFieldSelector'
import type { V1SecretKeySelector } from './V1SecretKeySelector'

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface V1EnvVarSource {
  /**
     * Selects a key of a ConfigMap.
     */
  configMapKeyRef?: V1ConfigMapKeySelector
  /**
     * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
     */
  fieldRef?: V1ObjectFieldSelector
  /**
     * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
     */
  resourceFieldRef?: V1ResourceFieldSelector
  /**
     * Selects a key of a secret in the pod's namespace
     */
  secretKeyRef?: V1SecretKeySelector
}