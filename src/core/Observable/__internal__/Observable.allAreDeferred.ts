import { DeferredObservableLike, ObservableLike } from "../../../core.js";
import ReadonlyArray_everySatisfy from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import Observable_isDeferred from "./Observable.isDeferred.js";

const Observable_allAreDeferred = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isDeferred),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as unknown as (
  srcs: ReadonlyArray<ObservableLike>,
) => srcs is ReadonlyArray<DeferredObservableLike>;

export default Observable_allAreDeferred;
