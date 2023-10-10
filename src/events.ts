import { SinkLike } from "./utils.js";

export const EventListenerLike_isErrorSafe = Symbol(
  "EventListenerLike_isErrorSafe",
);
/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends SinkLike<T> {
  readonly [EventListenerLike_isErrorSafe]: boolean;
}

/**
 * @noInheritDoc
 */
export interface ErrorSafeEventListenerLike<T = unknown>
  extends EventListenerLike<T> {
  readonly [EventListenerLike_isErrorSafe]: true;
}

export const EventSourceLike_addEventListener = Symbol(
  "EventSourceLike_addEventListener",
);

/**
 * @noInheritDoc
 */
export interface EventSourceLike<T = unknown> {
  [EventSourceLike_addEventListener](listener: EventListenerLike<T>): void;
}

export const PublisherLike_listenerCount = Symbol(
  "PublisherLike_listenerCount",
);

/**
 * @noInheritDoc
 */
export interface PublisherLike<T = unknown>
  extends EventSourceLike<T>,
    ErrorSafeEventListenerLike<T> {
  readonly [PublisherLike_listenerCount]: number;
}

export const StoreLike_value = Symbol("StoreLike_value");
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
