import { Function1, compose } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import { StreamableLike } from "../../../streaming.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_createQueueingEventHandler = <TEvent>(
  op: Function1<TEvent, ObservableLike<unknown>>,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly maxConcurrency?: number;
  },
): StreamableLike<TEvent, never> =>
  Streamable_create<TEvent, never>(
    Observable_mergeMap<TEvent, never>(
      compose(op, Observable_ignoreElements<ObservableLike, never>()),
      options,
    ),
  );

export default Streamable_createQueueingEventHandler;
