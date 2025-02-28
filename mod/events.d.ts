import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isPure, ComputationLike_isSynchronous, PureComputationLike, ReactiveComputationLike } from "./computations.js";
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
export interface EventSourceLike<out T = unknown> extends PureComputationLike, ReactiveComputationLike {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isSynchronous]: false;
    readonly [ComputationLike_isInteractive]: false;
    readonly [ComputationLike_isPure]?: true;
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
