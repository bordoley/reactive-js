import ReadonlyArray_everySatisfy from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import { EnumerableLike, ObservableLike } from "../../../rx.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

const Observable_allAreEnumerable = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isEnumerable),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as unknown as (
  srcs: ReadonlyArray<ObservableLike>,
) => srcs is ReadonlyArray<EnumerableLike>;

export default Observable_allAreEnumerable;
