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
import type { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec } from './ioK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec'
import type { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus } from './ioK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus'
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta'

/**
 * ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
 */
export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy {
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
     */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta
  /**
     * Specification of the desired behavior of the ValidatingAdmissionPolicy.
     */
  spec?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
  /**
     * The status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.
     */
  status?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus
}
