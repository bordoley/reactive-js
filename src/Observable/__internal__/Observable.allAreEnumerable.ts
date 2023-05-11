import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { TypePredicate, compose, isTrue } from "../../functions.js";
import { EnumerableLike, ObservableLike } from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

const Observable_allAreEnumerable: TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<EnumerableLike>
> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isEnumerable),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<EnumerableLike>
>;

export default Observable_allAreEnumerable;
