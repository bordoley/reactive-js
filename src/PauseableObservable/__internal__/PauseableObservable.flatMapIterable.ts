import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__internal__/Observer.createMergeAllObserverOperator.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { Function1, compose } from "../../functions.js";
import { PauseableObservableLike, RunnableLike } from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_mergeAll: <T>(options?: {
  concurrency: number;
}) => Function1<
  PauseableObservableLike<RunnableLike<T>>,
  PauseableObservableLike<T>
> = /*@__PURE__*/ compose(
  Observer_createMergeAllObserverOperator,
  PauseableObservable_lift,
);

const PauseableObservable_concatAll: <T>() => Function1<
  PauseableObservableLike<RunnableLike<T>>,
  PauseableObservableLike<T>
> = () => PauseableObservable_mergeAll({ concurrency: 1 });

const PauseableObservable_concatMap: <TA, TB>(
  selector: Function1<TA, RunnableLike<TB>>,
) => Function1<
  PauseableObservableLike<Function1<TA, RunnableLike<TB>>>,
  PauseableObservableLike<TB>
> = <TA, TB>(selector: Function1<TA, RunnableLike<TB>>) =>
  compose(
    PauseableObservable_map(selector),
    PauseableObservable_concatAll(),
  ) as Function1<
    PauseableObservableLike<Function1<TA, RunnableLike<TB>>>,
    PauseableObservableLike<TB>
  >;

const PauseableObservable_flatMapIterable: PauseableObservable.Signature["flatMapIterable"] =
  (<TA, TB>(selector: Function1<TA, Iterable<TB>>) =>
    PauseableObservable_concatMap(
      compose(selector, Iterable_toObservable<TB>()),
    )) as PauseableObservable.Signature["flatMapIterable"];

export default PauseableObservable_flatMapIterable;
