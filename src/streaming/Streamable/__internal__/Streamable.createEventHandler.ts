import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Function1, compose, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaustMap from "../../../rx/Observable/__internal__/Observable.exhaustMap.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import { StreamableLike } from "../../../streaming.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Streamable_create from "./Streamable.create.js";

interface CreateEventHandler {
  createEventHandler<TEventType>(
    op: Function1<TEventType, ObservableLike<unknown>>,
    options: { readonly mode: "switching" },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, ObservableLike<unknown>>,
    options: { readonly mode: "blocking" },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, ObservableLike<unknown>>,
    options: {
      readonly mode: "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, ObservableLike<unknown>>,
  ): StreamableLike<TEventType, boolean>;
}

const Streamable_createEventHandler: CreateEventHandler["createEventHandler"] =
  (<TEventType>(
    op: Function1<TEventType, ObservableLike<unknown>>,
    options: {
      readonly mode?: "switching" | "blocking" | "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    } = {},
  ): StreamableLike<TEventType, unknown> => {
    const { mode } = options;
    return Streamable_create<TEventType, unknown>(
      compose(
        mode === "switching"
          ? Observable_switchMap<TEventType, never>(
              compose(
                op,
                Observable_ignoreElements<ObservableLike, never>(),
                Observable_startWith<ObservableLike, boolean>(true),
                Observable_endWith<ObservableLike, boolean>(false),
              ),
            )
          : mode === "blocking"
          ? Observable_exhaustMap<TEventType, boolean>(
              compose(
                op,
                Observable_ignoreElements<ObservableLike, boolean>(),
                Observable_startWith<ObservableLike, boolean>(true),
                Observable_endWith<ObservableLike, boolean>(false),
              ),
            )
          : Observable_mergeMap<TEventType, never>(
              compose(
                op,
                Observable_ignoreElements<ObservableLike, never>(),
                Observable_startWith<ObservableLike, boolean>(true),
                Observable_endWith<ObservableLike, boolean>(false),
              ),
              { ...options, concurrency: 1 },
            ),
        Observable_mergeWith<ObservableLike, boolean>(
          pipe(false, Optional_toObservable()),
        ),
      ),
    );
  }) as CreateEventHandler["createEventHandler"];

export default Streamable_createEventHandler;
