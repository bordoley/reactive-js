import { DeferredObservableLike, StreamableLike } from "../../../concurrent.js";
import { Function1, compose, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_eventHandler: Streamable.Signature["eventHandler"] = (<
  TEventType,
>(
  op: Function1<TEventType, DeferredObservableLike<unknown>>,
  options: {
    readonly mode?: "switching" | "blocking" | "queueing";
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  } = {},
): StreamableLike<TEventType, unknown> => {
  const { mode } = options;
  const boundedOP = compose(
    op,
    Observable.ignoreElements(),
    Observable.startWith<boolean>(true),
    Observable.endWith<boolean>(false),
  );

  return Streamable_create<TEventType, unknown>(
    compose(
      mode === "switching"
        ? Observable.switchMap<TEventType, boolean>(boundedOP, {
            innerType: Observable.DeferredObservableWithSideEffectsType,
          })
        : mode === "blocking"
          ? Observable.exhaustMap<TEventType, boolean>(boundedOP, {
              innerType: Observable.DeferredObservableWithSideEffectsType,
            })
          : Observable.mergeMap<TEventType, boolean>(boundedOP, {
              ...options,
              concurrency: 1,
              innerType: Observable.DeferredObservableWithSideEffectsType,
            }),
      Observable.mergeWith<boolean>(pipe(false, Observable.fromValue())),
    ),
  );
}) as Streamable.Signature["eventHandler"];

export default Streamable_eventHandler;
