import DeferredObservable_concatMap from "../../DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import Enumerable_concatMap from "../../Enumerable/__internal__/Enumerable.concatMap.js";
import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import type * as Observable from "../../Observable.js";
import Runnable_concatMap from "../../Runnable/__internal__/Runnable.concatMap.js";
import SharedObservable_concatMap from "../../SharedObservable/__internal__/SharedObservable.concatMap.js";
import {
  Function1,
  compose,
  pipe,
  raiseWithDebugMessage,
} from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_isDeferredObservable from "./Observable.isDeferredObservable.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_isSharedObservable from "./Observable.isSharedObservable.js";

const Observable_flatMapIterable: Observable.Signature["flatMapIterable"] = (<
  TA,
  TB,
>(
  selector: Function1<TA, Iterable<TB>>,
) => {
  const mapper = compose(selector, Iterable_toRunnable<TB>());

  return (observable: ObservableLike<TA>) =>
    Observable_isEnumerable(observable)
      ? pipe(observable, Enumerable_concatMap(mapper))
      : Observable_isRunnable(observable)
      ? pipe(observable, Runnable_concatMap(mapper))
      : Observable_isDeferredObservable(observable)
      ? pipe(observable, DeferredObservable_concatMap(mapper))
      : Observable_isSharedObservable(observable)
      ? pipe(observable, SharedObservable_concatMap(mapper))
      : raiseWithDebugMessage("illegal state");
}) as Observable.Signature["flatMapIterable"];

export default Observable_flatMapIterable;
