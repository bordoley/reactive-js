import Stream_syncState from "./Stream/__internal__/Stream.syncState.js";
import { Function1, Function2, Updater } from "./functions.js";
import {
  DeferredObservableBaseLike,
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  StreamLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Module
 */
export interface StreamModule {
  syncState<T>(
    onInit: Function1<T, DeferredObservableBaseLike<Updater<T>>>,
    onChange: Function2<T, T, DeferredObservableBaseLike<Updater<T>>>,
    options?: {
      readonly throttleDuration?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly scheduler: SchedulerLike;
    },
  ): Function1<StreamLike<Updater<T>, T>, DisposableLike>;
}

export type Signature = StreamModule;

export const syncState: Signature["syncState"] = Stream_syncState;
