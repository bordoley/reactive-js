import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../functions.js";
import { DeferredObservableLike, ObservableLike } from "../../types.js";
import Observable_isDeferred from "./Observable.isDeferred.js";

const Observable_allAreDeferred = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isDeferred),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as unknown as (
  srcs: ReadonlyArray<ObservableLike>,
) => srcs is ReadonlyArray<DeferredObservableLike>;

export default Observable_allAreDeferred;
