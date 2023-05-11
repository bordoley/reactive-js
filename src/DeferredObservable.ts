import DeferredObservable_multicast from "./DeferredObservable/__internal__/DeferredObservable.multicast.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import { Factory, Function1 } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  DeferredObservableLike,
  DisposableLike,
  MulticastObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  SharedObservableLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: DeferredObservableLike<this[typeof Container_T]>;
}

export interface Signature {
  multicast<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<
    DeferredObservableLike<T>,
    MulticastObservableLike<T> & DisposableLike
  >;

  share<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<DeferredObservableLike<T>, SharedObservableLike<T>>;
}

export const multicast: Signature["multicast"] = DeferredObservable_multicast;
export const share: Signature["share"] = DeferredObservable_share;
