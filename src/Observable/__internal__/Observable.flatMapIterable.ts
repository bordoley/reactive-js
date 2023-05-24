import EnumerableWithSideEffects_concatAll from "../../EnumerableWithSideEffects/__internal__/EnumerableWithSideEffects.concatAll.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import type * as Observable from "../../Observable.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Runnable_concatMap from "../../Runnable/__internal__/Runnable.concatMap.js";
import { Function1, compose, pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_map from "./Observable.map.js";

const Observable_flatMapIterable: Observable.Signature["flatMapIterable"] = (<
  TA,
  TB,
>(
  selector: Function1<TA, Iterable<TB>>,
) => {
  const mapper = compose(selector, Iterable_toObservable<TB>());

  return (observable: ObservableLike<TA>) =>
    Observable_isEnumerable(observable)
      ? pipe(
          observable,
          Observable_map(mapper),
          EnumerableWithSideEffects_concatAll(),
        )
      : Observable_isRunnable(observable)
      ? pipe(observable, Runnable_concatMap(mapper))
      : pipe(observable, Observable_concatMap(mapper));
}) as Observable.Signature["flatMapIterable"];

export default Observable_flatMapIterable;
