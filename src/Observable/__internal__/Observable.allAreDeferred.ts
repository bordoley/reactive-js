import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { TypePredicate, compose, isTrue } from "../../functions.js";
import { DeferredObservableBaseLike, ObservableBaseLike } from "../../types.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_map from "./Observable.map.js";

const Observable_allAreDeferred: TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<DeferredObservableBaseLike>
> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_toObservable(),
    Observable_map<ObservableBaseLike, boolean>(Observable_isDeferred),
    Observable_everySatisfy(isTrue),
  ))() as TypePredicate<
  ReadonlyArray<ObservableBaseLike>,
  ReadonlyArray<DeferredObservableBaseLike>
>;

export default Observable_allAreDeferred;
