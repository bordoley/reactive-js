import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_liftDeferredObservableUpperBounded from "../../Observable/__internal__/Observable.liftDeferredObservableUpperBounded.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";

const DeferredObservable_mergeAll: DeferredObservable.Signature["mergeAll"] =
  /*@__PURE__*/ Observable_mergeAll<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(Observable_liftDeferredObservableUpperBounded);

export default DeferredObservable_mergeAll;
