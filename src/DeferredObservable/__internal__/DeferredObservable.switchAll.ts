import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_liftDeferredObservableUpperBounded from "../../Observable/__internal__/Observable.liftDeferredObservableUpperBounded.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";

const DeferredObservable_switchAll: DeferredObservable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_switchAll<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(Observable_liftDeferredObservableUpperBounded);

export default DeferredObservable_switchAll;
