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
import type { IoK8sApimachineryPkgApisMetaV1MicroTime } from './ioK8sApimachineryPkgApisMetaV1MicroTime'

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in \"k8s.io/client-go/tools/events/event_broadcaster.go\" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
 */
export interface IoK8sApiEventsV1EventSeries {
  /**
     * count is the number of occurrences in this series up to the last heartbeat time.
     */
  count: number
  /**
     * lastObservedTime is the time when last Event from the series was seen before last heartbeat.
     */
  lastObservedTime: IoK8sApimachineryPkgApisMetaV1MicroTime
}
