import { PureComputationLike } from "./computations.js";
import { DisposableLike } from "./utils.js";
export declare const EventListenerLike_notify: unique symbol;
/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends DisposableLike {
    /**
     * Notifies the EventListener of the next notification produced by the source.
     *
     * @param next - The next notification value.
     */
    [EventListenerLike_notify](event: T): void;
}
export declare const EventSourceLike_addEventListener: unique symbol;
/**
 * @noInheritDoc
 */
export interface EventSourceLike<out T = unknown> extends PureComputationLike {
    [EventSourceLike_addEventListener](listener: EventListenerLike<T>): void;
}
/**
 * @noInheritDoc
 */
export interface PublisherLike<T = unknown> extends EventSourceLike<T>, EventListenerLike<T> {
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
