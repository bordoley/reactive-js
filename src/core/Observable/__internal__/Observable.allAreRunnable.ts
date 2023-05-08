import { ObservableLike, RunnableLike } from "../../../core.js";
import ReadonlyArray_everySatisfy from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import Observable_isRunnable from "./Observable.isRunnable.js";

const Observable_allAreRunnable = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isRunnable),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as unknown as (
  srcs: ReadonlyArray<ObservableLike>,
) => srcs is ReadonlyArray<RunnableLike>;

export default Observable_allAreRunnable;
