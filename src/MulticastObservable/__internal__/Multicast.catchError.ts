import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import Observable_liftMulticastObservableUpperBounded from "../../Observable/__internal__/Observable.liftMulticastObservableUpperBounded.js";

const MulticastObservable_catchError: MulticastObservable.Signature["catchError"] =
  /*@__PURE__*/ Observable_catchErrorWithFallback<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(Observable_liftMulticastObservableUpperBounded);

export default MulticastObservable_catchError;
