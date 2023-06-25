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

/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export interface V1AzureDiskVolumeSource {
  /**
     * cachingMode is the Host Caching mode: None, Read Only, Read Write.
     */
  cachingMode?: string
  /**
     * diskName is the Name of the data disk in the blob storage
     */
  diskName: string
  /**
     * diskURI is the URI of data disk in the blob storage
     */
  diskURI: string
  /**
     * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
     */
  fsType?: string
  /**
     * kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
     */
  kind?: string
  /**
     * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     */
  readOnly?: boolean
}
