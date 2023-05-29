import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose, isTrue } from "../../functions.js";
import { EnumerableLike, ObservableBaseLike } from "../../types.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";
import Observable_isPure from "./Observable.isPure.js";
import Observable_map from "./Observable.map.js";

const Observable_allArePure: <T = unknown>(
  observables: readonly ObservableBaseLike<T>[],
) => observables is ReadonlyArray<EnumerableLike<T>> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_toObservable(),
    Observable_map<ObservableBaseLike, boolean>(Observable_isPure),
    Observable_everySatisfy(isTrue),
  ))() as <T = unknown>(
  observables: readonly ObservableBaseLike<T>[],
) => observables is ReadonlyArray<EnumerableLike<T>>;

export default Observable_allArePure;
