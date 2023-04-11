import { Function1, compose } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaustMap from "../../../rx/Observable/__internal__/Observable.exhaustMap.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import { StreamableLike } from "../../../streaming.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Streamable_create from "./Streamable.create.js";

interface CreateEventHandler {
  createEventHandler<TEvent>(
    op: Function1<TEvent, ObservableLike<unknown>>,
    options: { readonly mode: "switching" },
  ): StreamableLike<TEvent, never>;
  createEventHandler<TEvent>(
    op: Function1<TEvent, ObservableLike<unknown>>,
    options: { readonly mode: "blocking" },
  ): StreamableLike<TEvent, boolean>;
  createEventHandler<TEvent>(
    op: Function1<TEvent, ObservableLike<unknown>>,
    options: {
      readonly mode: "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<TEvent, never>;
  createEventHandler<TEvent>(
    op: Function1<TEvent, ObservableLike<unknown>>,
  ): StreamableLike<TEvent, never>;
}

const Streamable_createEventHandler: CreateEventHandler["createEventHandler"] =
  (<TEvent>(
    op: Function1<TEvent, ObservableLike<unknown>>,
    options: {
      readonly mode?: "switching" | "blocking" | "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    } = {},
  ): StreamableLike<TEvent, unknown> => {
    const { mode } = options;
    return Streamable_create<TEvent, unknown>(
      mode === "switching"
        ? Observable_switchMap<TEvent, never>(
            compose(op, Observable_ignoreElements<ObservableLike, never>()),
          )
        : mode === "blocking"
        ? compose(
            Observable_exhaustMap<TEvent, boolean>(
              compose(
                op,
                Observable_ignoreElements<ObservableLike, boolean>(),
                Observable_startWith<ObservableLike, boolean>(true),
                Observable_endWith<ObservableLike, boolean>(false),
              ),
            ),
            Observable_startWith<ObservableLike, boolean>(false),
          )
        : Observable_mergeMap<TEvent, never>(
            compose(op, Observable_ignoreElements<ObservableLike, never>()),
            { ...options, concurrency: 1 },
          ),
    );
  }) as CreateEventHandler["createEventHandler"];

export default Streamable_createEventHandler;
