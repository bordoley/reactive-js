import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import { Function1 } from "./functions.js";
import {
  AsyncIterableContainer,
  DeferredObservableLike,
  DisposableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "./types.js";

export type Type = AsyncIterableContainer;

export interface Signature {
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

export const flow: Signature["flow"] = AsyncIterable_flow;
export const toObservable: Signature["toObservable"] =
  AsyncIterable_toObservable;
