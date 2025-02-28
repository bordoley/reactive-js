import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  PureComputationLike,
} from "./computations.js";
import { DisposableLike } from "./utils.js";

export const EventListenerLike_notify = Symbol("EventListenerLike_notify");

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

export const EventSourceLike_addEventListener = Symbol(
  "EventSourceLike_addEventListener",
);

/**
 * @noInheritDoc
 */
export interface EventSourceLike<out T = unknown> extends PureComputationLike {
  readonly [ComputationLike_isDeferred]: false;
  readonly [ComputationLike_isSynchronous]: false;

  [EventSourceLike_addEventListener](listener: EventListenerLike<T>): void;
}

/**
 * @noInheritDoc
 */
export interface PublisherLike<T = unknown>
  extends EventSourceLike<T>,
    EventListenerLike<T> {}

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
