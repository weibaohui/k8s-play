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
import type { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec } from './ioK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec'
import type { V1ObjectMeta } from './V1ObjectMeta'

/**
 * ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.
 */
export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding {
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
  metadata?: V1ObjectMeta
  /**
     * Specification of the desired behavior of the ValidatingAdmissionPolicyBinding.
     */
  spec?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec
}
