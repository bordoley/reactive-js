import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { TypePredicate, compose, isTrue } from "../../functions.js";
import { DeferredObservableLike, ObservableLike } from "../../types.js";
import Observable_isDeferred from "./Observable.isDeferred.js";

const Observable_allAreDeferred: TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<DeferredObservableLike>
> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isDeferred),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<DeferredObservableLike>
>;

export default Observable_allAreDeferred;
