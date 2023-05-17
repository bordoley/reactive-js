import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import { Function1 } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  DeferredObservableLike,
  DisposableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends Container {
  readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}

export type Type = AsyncIterableContainer;

export interface AsyncIterableModule {
  // FIXME: should be defined on a typeclass
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<AsyncIterable<T>, PauseableObservableLike<T> & DisposableLike>;

  toObservable<T>(): Function1<AsyncIterable<T>, DeferredObservableLike<T>>;
}

export type Signature = AsyncIterableModule;

export const flow: Signature["flow"] = AsyncIterable_flow;
export const toObservable: Signature["toObservable"] =
  AsyncIterable_toObservable;
