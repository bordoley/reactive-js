import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import MulticastObservable_lift from "../../MulticastObservable/__internal__/MulticastObservable.lift.js";
import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";

const MulticastObservable_catchError: MulticastObservable.Signature["catchError"] =
  /*@__PURE__*/ Observable_catchErrorWithFallback<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(MulticastObservable_lift);

export default MulticastObservable_catchError;
