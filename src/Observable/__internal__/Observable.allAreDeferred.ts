import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { TypePredicate, compose, isTrue } from "../../functions.js";
import { DeferredObservableBaseLike, ObservableBaseLike } from "../../types.js";
import Observable_isDeferredObservable from "./Observable.isDeferredObservable.js";

const Observable_allAreDeferred: TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<DeferredObservableBaseLike>
> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isDeferredObservable),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<DeferredObservableBaseLike>
>;

export default Observable_allAreDeferred;
