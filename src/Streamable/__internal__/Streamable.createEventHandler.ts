import Observable_endWith from "../../Observable/__internal__/Observable.endWith.js";
import Observable_exhaustMap from "../../Observable/__internal__/Observable.exhaustMap.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../Observable/__internal__/Observable.mergeMap.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_startWith from "../../Observable/__internal__/Observable.startWith.js";
import Observable_switchMap from "../../Observable/__internal__/Observable.switchMap.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import type * as Streamable from "../../Streamable.js";
import { Function1, compose, pipe } from "../../functions.js";
import {
  DeferredObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  StreamableLike,
} from "../../types.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_createEventHandler: Streamable.Signature["createEventHandler"] =
  (<TEventType>(
    op: Function1<TEventType, DeferredObservableLike<unknown>>,
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
                Observable_ignoreElements(),
                Observable_startWith<boolean>(true),
                Observable_endWith<boolean>(false),
              ),
            )
          : mode === "blocking"
          ? Observable_exhaustMap<TEventType, boolean>(
              compose(
                op,
                Observable_ignoreElements<boolean>(),
                Observable_startWith<boolean>(true),
                Observable_endWith<boolean>(false),
              ),
            )
          : Observable_mergeMap<TEventType, never>(
              compose(
                op,
                Observable_ignoreElements<never>(),
                Observable_startWith<boolean>(true),
                Observable_endWith<boolean>(false),
              ),
              { ...options, concurrency: 1 },
            ),
        Observable_mergeWith<boolean>(pipe(false, Optional_toObservable())),
      ),
    );
  }) as Streamable.Signature["createEventHandler"];

export default Streamable_createEventHandler;
