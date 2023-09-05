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
import type { IoK8sApiFlowcontrolV1beta2FlowSchemaCondition } from './ioK8sApiFlowcontrolV1beta2FlowSchemaCondition'

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export class IoK8sApiFlowcontrolV1beta2FlowSchemaStatus {
  /**
     * `conditions` is a list of the current states of FlowSchema.
     */
  conditions?: Array<IoK8sApiFlowcontrolV1beta2FlowSchemaCondition>
}
