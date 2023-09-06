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
import type { V1IPBlock } from './v1IPBlock'
import type { V1LabelSelector } from './v1LabelSelector'

/**
 * NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
 */
export class V1NetworkPolicyPeer {
  /**
     * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
     */
  ipBlock?: V1IPBlock
  /**
     * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.  If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
     */
  namespaceSelector?: V1LabelSelector
  /**
     * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods.  If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
     */
  podSelector?: V1LabelSelector
}
