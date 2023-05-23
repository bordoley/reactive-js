import type * as Observable from "../../Observable.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import { Function2, pipe } from "../../functions.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
} from "../../types.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";

const Observable_flatMapAsync: Observable.Signature["flatMapAsync"] = (<TA, TB>(
  f: Function2<TA, AbortSignal, Promise<TB>>,
) => {
  const mapper = (a: TA) =>
    pipe(
      (abortSignal: AbortSignal) => f(a, abortSignal),
      Observable_fromAsyncFactory(),
    );

  return (
    observable: DeferredObservableLike<TA> | MulticastObservableLike<TA>,
  ) => pipe(observable, Observable_concatMap(mapper));
}) as Observable.Signature["flatMapAsync"];

export default Observable_flatMapAsync;
