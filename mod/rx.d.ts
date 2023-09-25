import { DisposableLike, QueueableLike } from "./utils.js";
export declare const SinkLike_notify: unique symbol;
/**
 * @noInheritDoc
 */
export interface SinkLike<T = unknown> extends DisposableLike {
    /**
     * Notifies the sink of the next notification produced by the source.
     *
     * @param next - The next notification value.
     */
    [SinkLike_notify](event: T): void;
}
export declare const EventListenerLike_isErrorSafe: unique symbol;
/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends SinkLike<T> {
    readonly [EventListenerLike_isErrorSafe]: boolean;
}
/**
 * @noInheritDoc
 */
export interface ErrorSafeEventListenerLike<T = unknown> extends EventListenerLike<T> {
    readonly [EventListenerLike_isErrorSafe]: true;
}
export declare const EventSourceLike_addEventListener: unique symbol;
/**
 * @noInheritDoc
 */
export interface EventSourceLike<T = unknown> {
    [EventSourceLike_addEventListener](listener: EventListenerLike<T>): void;
}
export declare const PublisherLike_listenerCount: unique symbol;
/**
 * @noInheritDoc
 */
export interface PublisherLike<T = unknown> extends EventSourceLike<T>, ErrorSafeEventListenerLike<T> {
    readonly [PublisherLike_listenerCount]: number;
}
export declare const StoreLike_value: unique symbol;
/**
 * @noInheritDoc
 */
export interface StoreLike<T = unknown> extends EventSourceLike<T> {
    readonly [StoreLike_value]: T;
}
/**
 * @noInheritDoc
 */
export interface WritableStoreLike<T = unknown> extends StoreLike<T> {
    [StoreLike_value]: T;
}
export declare const DispatcherLikeEvent_ready: unique symbol;
export declare const DispatcherLikeEvent_capacityExceeded: unique symbol;
export declare const DispatcherLikeEvent_completed: unique symbol;
/**
 * @noInheritDoc
 */
export interface DispatcherLikeEventMap {
    [DispatcherLikeEvent_ready]: typeof DispatcherLikeEvent_ready;
    [DispatcherLikeEvent_capacityExceeded]: typeof DispatcherLikeEvent_capacityExceeded;
    [DispatcherLikeEvent_completed]: typeof DispatcherLikeEvent_completed;
}
export declare const DispatcherLike_complete: unique symbol;
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown> extends QueueableLike<T>, EventSourceLike<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]> {
    /**
     * Communicates to the dispatcher that no more events will be enqueued.
     */
    [DispatcherLike_complete](): void;
}
export declare const PauseableLike_isPaused: unique symbol;
export declare const PauseableLike_pause: unique symbol;
export declare const PauseableLike_resume: unique symbol;
/**
 * @noInheritDoc
 */
export interface PauseableLike {
    /**
     * Boolean flag indicating if the PauseableLike is currently paused or not.
     */
    readonly [PauseableLike_isPaused]: StoreLike<boolean>;
    /**
     * Imperatively pause the source.
     */
    [PauseableLike_pause](): void;
    /**
     * Imperatively resume the source.
     */
    [PauseableLike_resume](): void;
}
