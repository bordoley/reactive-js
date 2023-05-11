import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toDeferredObservable from "./AsyncIterable/__internal__/AsyncIterable.toDeferredObservable.js";
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

export interface Type extends Container {
  readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}

export interface Signature {
  // FIXME: should be defined on a typeclass
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<AsyncIterable<T>, PauseableObservableLike<T> & DisposableLike>;

  toDeferredObservable<T>(): Function1<
    AsyncIterable<T>,
    DeferredObservableLike<T>
  >;
}

export const flow: Signature["flow"] = AsyncIterable_flow;
export const toDeferredObservable: Signature["toDeferredObservable"] =
  AsyncIterable_toDeferredObservable;
