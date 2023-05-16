import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose } from "../../functions.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";
import MulticastObservable_mergeAll from "./MulticastObservable.mergeAll.js";

const MulticastObservable_mergeMap: MulticastObservable.Signature["mergeMap"] =
  <TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ) =>
    compose(
      Observable_map(selector) as Function1<
        MulticastObservableLike<TA>,
        MulticastObservableLike<DeferredObservableLike<TB>>
      >,
      MulticastObservable_mergeAll(options),
    );

export default MulticastObservable_mergeMap;
