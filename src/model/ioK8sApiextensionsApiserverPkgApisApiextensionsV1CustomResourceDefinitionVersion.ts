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
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition'
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources'
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation'

/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion {
  /**
     * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
     */
  additionalPrinterColumns?: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition>
  /**
     * deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
     */
  deprecated?: boolean
  /**
     * deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
     */
  deprecationWarning?: string
  /**
     * name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
     */
  name: string
  /**
     * schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource.
     */
  schema?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation
  /**
     * served is a flag enabling/disabling this version from being served via REST APIs
     */
  served: boolean
  /**
     * storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
     */
  storage: boolean
  /**
     * subresources specify what subresources this version of the defined custom resource have.
     */
  subresources?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources
}
