import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { TypePredicate, compose, isTrue } from "../../functions.js";
import {
  ObservableBaseLike,
  RunnableWithSideEffectsLike,
} from "../../types.js";
import Observable_isRunnable from "./Observable.isRunnable.js";

const Observable_allAreRunnable: TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<RunnableWithSideEffectsLike>
> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isRunnable),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<RunnableWithSideEffectsLike>
>;

export default Observable_allAreRunnable;
