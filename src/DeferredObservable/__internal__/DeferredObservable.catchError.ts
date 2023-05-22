import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import Observable_liftDeferredObservableUpperBounded from "../../Observable/__internal__/Observable.liftDeferredObservableUpperBounded.js";

const DeferredObservable_catchError: DeferredObservable.Signature["catchError"] =
  /*@__PURE__*/ Observable_catchErrorWithFallback<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(Observable_liftDeferredObservableUpperBounded);

export default DeferredObservable_catchError;
