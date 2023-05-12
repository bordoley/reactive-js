import Stream_syncState from "./Stream/__internal__/Stream.syncState.js";
import { Function1, Function2, Updater } from "./functions.js";
import {
  DeferredObservableLike,
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  StreamLike,
} from "./types.js";

export interface Signature {
  syncState<T>(
    onInit: Function1<T, DeferredObservableLike<Updater<T>>>,
    onChange: Function2<T, T, DeferredObservableLike<Updater<T>>>,
    options?: {
      readonly throttleDuration?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly scheduler: SchedulerLike;
    },
  ): Function1<StreamLike<Updater<T>, T>, DisposableLike>;
}

export const syncState: Signature["syncState"] = Stream_syncState;
