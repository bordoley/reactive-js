import { DeferredObservableLike, StreamableLike } from "../../../concurrent.js";
import { Function1, compose, pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
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
          ? Observable.switchMap<TEventType, boolean>(
              compose(
                op,
                Observable.ignoreElements(),
                Observable.startWith<boolean>(true),
                Observable.endWith<boolean>(false),
              ),
              { innerType: Observable.DeferredObservableWithSideEffectsType },
            )
          : mode === "blocking"
          ? Observable.exhaustMap<TEventType, boolean>(
              compose(
                op,
                Observable.ignoreElements<boolean>(),
                Observable.startWith<boolean>(true),
                Observable.endWith<boolean>(false),
              ),
              { innerType: Observable.DeferredObservableWithSideEffectsType },
            )
          : Observable.mergeMap<TEventType, boolean>(
              compose(
                op,
                Observable.ignoreElements<never>(),
                Observable.startWith<boolean>(true),
                Observable.endWith<boolean>(false),
              ),
              {
                ...options,
                concurrency: 1,
                innerType: Observable.DeferredObservableWithSideEffectsType,
              },
            ),
        Observable.mergeWith<boolean>(pipe(false, Observable.fromValue())),
      ),
    );
  }) as Streamable.Signature["createEventHandler"];

export default Streamable_createEventHandler;
