import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import type * as SharedObservable from "../../SharedObservable.js";
import SharedObservable_lift from "./SharedObservable.lift.js";

const SharedObservable_mergeAll: SharedObservable.Signature["mergeAll"] =
  /*@__PURE__*/ Observable_mergeAll<
    SharedObservable.Type,
    DeferredObservable.Type
  >(SharedObservable_lift);

export default SharedObservable_mergeAll;
