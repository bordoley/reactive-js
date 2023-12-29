import { DisposableLike } from "./utils.js";
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
export interface WritableStoreLike<T = unknown> extends StoreLike<T>, DisposableLike {
    [StoreLike_value]: T;
}
