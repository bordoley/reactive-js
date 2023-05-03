import ReadonlyArray_everySatisfy from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import { ObservableLike, RunnableLike } from "../../../rx.js";
import Observable_isRunnable from "./Observable.isRunnable.js";

const Observable_allAreRunnable = /*@__PURE__*/ (() =>
  compose(
    ReadonlyArray_map(Observable_isRunnable),
    ReadonlyArray_everySatisfy(isTrue),
  ))() as unknown as (
  srcs: ReadonlyArray<ObservableLike>,
) => srcs is ReadonlyArray<RunnableLike>;

export default Observable_allAreRunnable;
