import DeferredObservable_concatMap from "../../DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import type * as Observable from "../../Observable.js";
import SharedObservable_concatMap from "../../SharedObservable/__internal__/SharedObservable.concatMap.js";
import { Function2, pipe } from "../../functions.js";
import { DeferredObservableLike, SharedObservableLike } from "../../types.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
import Observable_isDeferredObservable from "./Observable.isDeferredObservable.js";

const Observable_flatMapAsync: Observable.Signature["flatMapAsync"] = (<TA, TB>(
  f: Function2<TA, AbortSignal, Promise<TB>>,
) => {
  const mapper = (a: TA) =>
    pipe(
      (abortSignal: AbortSignal) => f(a, abortSignal),
      Observable_fromAsyncFactory(),
    );

  return (observable: DeferredObservableLike<TA> | SharedObservableLike<TA>) =>
    Observable_isDeferredObservable(observable)
      ? pipe(observable, DeferredObservable_concatMap(mapper))
      : pipe(observable, SharedObservable_concatMap(mapper));
}) as Observable.Signature["flatMapAsync"];

export default Observable_flatMapAsync;
