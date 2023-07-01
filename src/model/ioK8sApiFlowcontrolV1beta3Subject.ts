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
import type { IoK8sApiFlowcontrolV1beta3GroupSubject } from './ioK8sApiFlowcontrolV1beta3GroupSubject'
import type { IoK8sApiFlowcontrolV1beta3ServiceAccountSubject } from './ioK8sApiFlowcontrolV1beta3ServiceAccountSubject'
import type { IoK8sApiFlowcontrolV1beta3UserSubject } from './ioK8sApiFlowcontrolV1beta3UserSubject'

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface IoK8sApiFlowcontrolV1beta3Subject {
  /**
     * `group` matches based on user group name.
     */
  group?: IoK8sApiFlowcontrolV1beta3GroupSubject
  /**
     * `kind` indicates which one of the other fields is non-empty. Required
     */
  kind: string
  /**
     * `serviceAccount` matches ServiceAccounts.
     */
  serviceAccount?: IoK8sApiFlowcontrolV1beta3ServiceAccountSubject
  /**
     * `user` matches based on username.
     */
  user?: IoK8sApiFlowcontrolV1beta3UserSubject
}