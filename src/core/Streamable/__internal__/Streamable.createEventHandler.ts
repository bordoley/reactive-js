import {
  DeferredObservableContainer,
  DeferredObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  StreamableLike,
} from "../../../core.js";
import Observable_endWith from "../../../core/Observable/__internal__/Observable.endWith.js";
import Observable_ignoreElements from "../../../core/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../core/Observable/__internal__/Observable.mergeWith.js";
import Observable_startWith from "../../../core/Observable/__internal__/Observable.startWith.js";
import Optional_toObservable from "../../../core/Optional/__internal__/Optional.toObservable.js";
import { Function1, compose, pipe } from "../../../functions.js";
import DeferredObservable_exhaustMap from "../../DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_mergeMap from "../../DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_switchMap from "../../DeferredObservable/__internal__/DeferredObservable.switchMap.js";
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
                Observable_ignoreElements<DeferredObservableContainer, never>(),
                Observable_startWith<DeferredObservableContainer, boolean>(
                  true,
                ),
                Observable_endWith<DeferredObservableContainer, boolean>(false),
              ),
            )
          : mode === "blocking"
          ? DeferredObservable_exhaustMap<TEventType, boolean>(
              compose(
                op,
                Observable_ignoreElements<
                  DeferredObservableContainer,
                  boolean
                >(),
                Observable_startWith<DeferredObservableContainer, boolean>(
                  true,
                ),
                Observable_endWith<DeferredObservableContainer, boolean>(false),
              ),
            )
          : DeferredObservable_mergeMap<TEventType, never>(
              compose(
                op,
                Observable_ignoreElements<DeferredObservableContainer, never>(),
                Observable_startWith<DeferredObservableContainer, boolean>(
                  true,
                ),
                Observable_endWith<DeferredObservableContainer, boolean>(false),
              ),
              { ...options, concurrency: 1 },
            ),
        Observable_mergeWith<DeferredObservableContainer, boolean>(
          pipe(false, Optional_toObservable()),
        ),
      ),
    );
  }) as CreateEventHandler["createEventHandler"];

export default Streamable_createEventHandler;
