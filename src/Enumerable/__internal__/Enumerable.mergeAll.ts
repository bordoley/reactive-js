import type * as Enumerable from "../../Enumerable.js";
import Observable_liftEnumerableUpperBounded from "../../Observable/__internal__/Observable.liftEnumerableUpperBounded.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";

// Internal implementation detail. Can't merge Enumerables.
const Enumerable_mergeAll = /*@__PURE__*/ Observable_mergeAll<
  Enumerable.Type,
  Enumerable.Type
>(Observable_liftEnumerableUpperBounded);

export default Enumerable_mergeAll;
