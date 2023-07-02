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
import type { V1EventSeries } from './V1EventSeries'
import type { V1EventSource } from './V1EventSource'
import type { V1ObjectReference } from './V1ObjectReference'
import type { IoK8sApimachineryPkgApisMetaV1MicroTime } from './ioK8sApimachineryPkgApisMetaV1MicroTime'
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta'
import type { IoK8sApimachineryPkgApisMetaV1Time } from './ioK8sApimachineryPkgApisMetaV1Time'

/**
 * Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 */
export class V1Event {
  /**
     * What action was taken/failed regarding to the Regarding object.
     */
  action?: string
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * The number of times this event has occurred.
     */
  count?: number
  /**
     * Time when this Event was first observed.
     */
  eventTime?: IoK8sApimachineryPkgApisMetaV1MicroTime
  /**
     * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
     */
  firstTimestamp?: IoK8sApimachineryPkgApisMetaV1Time
  /**
     * The object that this event is about.
     */
  involvedObject: V1ObjectReference
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * The time at which the most recent occurrence of this event was recorded.
     */
  lastTimestamp?: IoK8sApimachineryPkgApisMetaV1Time
  /**
     * A human-readable description of the status of this operation.
     */
  message?: string
  /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
  metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta
  /**
     * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
     */
  reason?: string
  /**
     * Optional secondary object for more complex actions.
     */
  related?: V1ObjectReference
  /**
     * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
     */
  reportingComponent?: string
  /**
     * ID of the controller instance, e.g. `kubelet-xyzf`.
     */
  reportingInstance?: string
  /**
     * Data about the Event series this event represents or nil if it's a singleton Event.
     */
  series?: V1EventSeries
  /**
     * The component reporting this event. Should be a short machine understandable string.
     */
  source?: V1EventSource
  /**
     * Type of this event (Normal, Warning), new types could be added in the future
     */
  type?: string
}
