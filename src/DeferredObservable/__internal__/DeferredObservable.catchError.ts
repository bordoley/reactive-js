import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";

const DeferredObservable_catchError: DeferredObservable.Signature["catchError"] =
  /*@__PURE__*/ Observable_catchErrorWithFallback<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(DeferredObservable_lift);

export default DeferredObservable_catchError;
