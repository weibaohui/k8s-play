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
import type { IoK8sApiAutoscalingV2CrossVersionObjectReference } from './ioK8sApiAutoscalingV2CrossVersionObjectReference'
import type { IoK8sApiAutoscalingV2MetricIdentifier } from './ioK8sApiAutoscalingV2MetricIdentifier'
import type { IoK8sApiAutoscalingV2MetricValueStatus } from './ioK8sApiAutoscalingV2MetricValueStatus'

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IoK8sApiAutoscalingV2ObjectMetricStatus {
  /**
     * current contains the current value for the given metric
     */
  current: IoK8sApiAutoscalingV2MetricValueStatus
  /**
     * DescribedObject specifies the descriptions of a object,such as kind,name apiVersion
     */
  describedObject: IoK8sApiAutoscalingV2CrossVersionObjectReference
  /**
     * metric identifies the target metric by name and selector
     */
  metric: IoK8sApiAutoscalingV2MetricIdentifier
}
