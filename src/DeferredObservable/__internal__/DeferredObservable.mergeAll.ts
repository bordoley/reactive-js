import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";

const DeferredObservable_mergeAll: DeferredObservable.Signature["mergeAll"] =
  /*@__PURE__*/ Observable_mergeAll<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(DeferredObservable_lift);

export default DeferredObservable_mergeAll;
