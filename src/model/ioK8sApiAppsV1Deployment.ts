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
import type { IoK8sApiAppsV1DeploymentSpec } from './ioK8sApiAppsV1DeploymentSpec'
import type { IoK8sApiAppsV1DeploymentStatus } from './ioK8sApiAppsV1DeploymentStatus'
import type { V1ObjectMeta } from './V1ObjectMeta'

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface IoK8sApiAppsV1Deployment {
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
  metadata?: V1ObjectMeta
  /**
     * Specification of the desired behavior of the Deployment.
     */
  spec?: IoK8sApiAppsV1DeploymentSpec
  /**
     * Most recently observed status of the Deployment.
     */
  status?: IoK8sApiAppsV1DeploymentStatus
}
