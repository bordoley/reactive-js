import { DisposableLike } from "./utils.js";

export const EventListenerLike_isErrorSafe = Symbol(
  "EventListenerLike_isErrorSafe",
);

export const EventListenerLike_notify = Symbol("EventListenerLike_notify");

/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends DisposableLike {
  readonly [EventListenerLike_isErrorSafe]: boolean;

  /**
   * Notifies the EventListener of the next notification produced by the source.
   *
   * @param next - The next notification value.
   */
  [EventListenerLike_notify](event: T): void;
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

/**
 * @noInheritDoc
 */
export interface PublisherLike<T = unknown>
  extends EventSourceLike<T>,
    ErrorSafeEventListenerLike<T> {}

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
export interface WritableStoreLike<T = unknown>
  extends StoreLike<T>,
    DisposableLike {
  [StoreLike_value]: T;
}
