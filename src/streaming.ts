import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
} from "./containers.js";
import { Function1 } from "./functions.js";
import { MulticastObservableLike } from "./rx.js";
import {
  DispatcherLike,
  PauseableLike,
  PauseableState,
  SchedulerLike,
} from "./scheduling.js";

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}

/** @ignore */
export const StreamableLike_stream = Symbol("StreamableLike_stream");

/** @ignore */
export const StreamableLike_isEnumerable = Symbol(
  "StreamableLike_isEnumerable",
);

/** @ignore */
export const StreamableLike_isInteractive = Symbol(
  "StreamableLike_isInteractive",
);

/** @ignore */
export const StreamableLike_isRunnable = Symbol("StreamableLike_isRunnable");

/**
 * @noInheritDoc
 * @category Container
 */
export interface StreamableLike<
  TReq,
  T,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
> {
  readonly [StreamableLike_isEnumerable]: boolean;
  readonly [StreamableLike_isInteractive]: boolean;
  readonly [StreamableLike_isRunnable]: boolean;

  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T>,
    ContainerLike {
  readonly [ContainerLike_type]?: AsyncEnumerableLike<
    this[typeof ContainerLike_T]
  >;

  readonly [StreamableLike_isInteractive]: true;
}

/**
 * @noInheritDoc
 */
export interface FlowableStreamLike<T = unknown>
  extends StreamLike<PauseableState, T>,
    PauseableLike {
  readonly [StreamableLike_isEnumerable]: false;
  readonly [StreamableLike_isInteractive]: false;
}

/**
 * @noInheritDoc
 * @category Container
 */
export interface FlowableLike<T = unknown>
  extends StreamableLike<PauseableState, T, FlowableStreamLike<T>>,
    ContainerLike {
  readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromAsyncEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromAsyncEnumerable<T>(
    options?: O,
  ): Function1<AsyncEnumerableLike<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromFlowable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromFlowable<T>(options?: O): Function1<FlowableLike<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToAsyncEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Transform
   */
  toAsyncEnumerable<T>(
    options?: O,
  ): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToFlowable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Transform
   */
  toFlowable<T>(options?: O): Function1<ContainerOf<C, T>, FlowableLike<T>>;
}
