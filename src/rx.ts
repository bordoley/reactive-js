import { DisposableLike, QueueableLike } from "./utils.js";

export const SinkLike_notify = Symbol("SinkLike_notify");

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

export const DispatcherLikeEvent_ready = Symbol("DispatcherLikeEvent_ready");
export const DispatcherLikeEvent_capacityExceeded = Symbol(
  "DispatcherLikeEvent_capacityExceeded",
);
export const DispatcherLikeEvent_completed = Symbol(
  "DispatcherLikeEvent_completed",
);

/**
 * @noInheritDoc
 */
export interface DispatcherLikeEventMap {
  [DispatcherLikeEvent_ready]: typeof DispatcherLikeEvent_ready;
  [DispatcherLikeEvent_capacityExceeded]: typeof DispatcherLikeEvent_capacityExceeded;
  [DispatcherLikeEvent_completed]: typeof DispatcherLikeEvent_completed;
}

export const DispatcherLike_complete = Symbol("DispatcherLike_complete");
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown>
  extends QueueableLike<T>,
    EventSourceLike<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]> {
  /**
   * Communicates to the dispatcher that no more events will be enqueued.
   */
  [DispatcherLike_complete](): void;
}

export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");

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
