import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../functions.js";
import { EnumerableLike, ObservableLike } from "../../types.js";
import Observable_isPure from "./Observable.isPure.js";

const Observable_allArePure: <T = unknown>(
  observables: readonly ObservableLike<T>[],
) => observables is ReadonlyArray<EnumerableLike<T>> = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isPure),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as <T = unknown>(
  observables: readonly ObservableLike<T>[],
) => observables is ReadonlyArray<EnumerableLike<T>>;

export default Observable_allArePure;
