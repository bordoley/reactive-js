import type * as Enumerable from "../../Enumerable.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import Enumerable_lift from "./Enumerable.lift.js";

// Internal implementation detail. Can't merge Enumerables.
const Enumerable_mergeAll = /*@__PURE__*/ Observable_mergeAll<
  Enumerable.Type,
  Enumerable.Type
>(Enumerable_lift);

export default Enumerable_mergeAll;
