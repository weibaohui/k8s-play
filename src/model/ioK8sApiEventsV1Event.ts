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
import type { V1EventSource } from './V1EventSource'
import type { V1ObjectReference } from './V1ObjectReference'
import type { IoK8sApiEventsV1EventSeries } from './ioK8sApiEventsV1EventSeries'
import type { IoK8sApimachineryPkgApisMetaV1MicroTime } from './ioK8sApimachineryPkgApisMetaV1MicroTime'
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta'
import type { V1Time } from './V1Time'

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 */
export interface IoK8sApiEventsV1Event {
  /**
     * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
     */
  action?: string
  /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
  apiVersion?: string
  /**
     * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
     */
  deprecatedCount?: number
  /**
     * deprecatedFirstTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
     */
  deprecatedFirstTimestamp?: V1Time
  /**
     * deprecatedLastTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
     */
  deprecatedLastTimestamp?: V1Time
  /**
     * deprecatedSource is the deprecated field assuring backward compatibility with core.v1 Event type.
     */
  deprecatedSource?: V1EventSource
  /**
     * eventTime is the time when this Event was first observed. It is required.
     */
  eventTime: IoK8sApimachineryPkgApisMetaV1MicroTime
  /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
  kind?: string
  /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta
  /**
     * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
     */
  note?: string
  /**
     * reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
     */
  reason?: string
  /**
     * regarding contains the object this Event is about. In most cases it's an Object reporting controller implements, e.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.
     */
  regarding?: V1ObjectReference
  /**
     * related is the optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.
     */
  related?: V1ObjectReference
  /**
     * reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
     */
  reportingController?: string
  /**
     * reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
     */
  reportingInstance?: string
  /**
     * series is data about the Event series this event represents or nil if it's a singleton Event.
     */
  series?: IoK8sApiEventsV1EventSeries
  /**
     * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
     */
  type?: string
}
