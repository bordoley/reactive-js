import type * as IndexedCollection from "../../IndexedCollection.js";
import Observable_flow from "../../Observable/__internal__/Observable.flow.js";
import { Function1, compose } from "../../functions.js";
import {
  DisposableLike,
  IndexedCollectionLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import IndexedCollection_toObservable from "./IndexedCollection.toObservable.js";

const IndexedCollection_flow: IndexedCollection.Signature["flow"] = <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly start?: number;
    readonly count?: number;
  },
): Function1<
  IndexedCollectionLike<T>,
  PauseableObservableLike<T> & DisposableLike
> =>
  compose(
    IndexedCollection_toObservable(
      options as {
        readonly count: number;
        readonly start?: number;
      },
    ),
    Observable_flow(scheduler, options),
  );

export default IndexedCollection_flow;
