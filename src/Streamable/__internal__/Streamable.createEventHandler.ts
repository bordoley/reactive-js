import DeferredObservable_exhaustMap from "../../DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_mergeMap from "../../DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_switchMap from "../../DeferredObservable/__internal__/DeferredObservable.switchMap.js";
import Observable_endWith from "../../Observable/__internal__/Observable.endWith.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_startWith from "../../Observable/__internal__/Observable.startWith.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import { DeferredObservableContainer } from "../../containers.js";
import { Function1, compose, pipe } from "../../functions.js";
import {
  DeferredObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  StreamableLike,
} from "../../types.js";
import Streamable_create from "./Streamable.create.js";

interface CreateEventHandler {
  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableLike<unknown>>,
    options: { readonly mode: "switching" },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableLike<unknown>>,
    options: { readonly mode: "blocking" },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableLike<unknown>>,
    options: {
      readonly mode: "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableLike<unknown>>,
  ): StreamableLike<TEventType, boolean>;
}

const Streamable_createEventHandler: CreateEventHandler["createEventHandler"] =
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
          ? DeferredObservable_switchMap<TEventType, never>(
              compose(
                op,
                Observable_ignoreElements<
                  DeferredObservableContainer.Type,
                  never
                >(),
                Observable_startWith<DeferredObservableContainer.Type, boolean>(
                  true,
                ),
                Observable_endWith<DeferredObservableContainer.Type, boolean>(
                  false,
                ),
              ),
            )
          : mode === "blocking"
          ? DeferredObservable_exhaustMap<TEventType, boolean>(
              compose(
                op,
                Observable_ignoreElements<
                  DeferredObservableContainer.Type,
                  boolean
                >(),
                Observable_startWith<DeferredObservableContainer.Type, boolean>(
                  true,
                ),
                Observable_endWith<DeferredObservableContainer.Type, boolean>(
                  false,
                ),
              ),
            )
          : DeferredObservable_mergeMap<TEventType, never>(
              compose(
                op,
                Observable_ignoreElements<
                  DeferredObservableContainer.Type,
                  never
                >(),
                Observable_startWith<DeferredObservableContainer.Type, boolean>(
                  true,
                ),
                Observable_endWith<DeferredObservableContainer.Type, boolean>(
                  false,
                ),
              ),
              { ...options, concurrency: 1 },
            ),
        Observable_mergeWith<DeferredObservableContainer.Type, boolean>(
          pipe(false, Optional_toObservable()),
        ),
      ),
    );
  }) as CreateEventHandler["createEventHandler"];

export default Streamable_createEventHandler;
