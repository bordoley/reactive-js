import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { TypePredicate, compose, isTrue } from "../../functions.js";
import {
  ObservableBaseLike,
  RunnableWithSideEffectsLike,
} from "../../types.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_map from "./Observable.map.js";

const Observable_allAreRunnable: TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<RunnableWithSideEffectsLike>
> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_toObservable(),
    Observable_map<ObservableBaseLike, boolean>(Observable_isRunnable),
    Observable_everySatisfy(isTrue),
  ))() as TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<RunnableWithSideEffectsLike>
>;

export default Observable_allAreRunnable;
