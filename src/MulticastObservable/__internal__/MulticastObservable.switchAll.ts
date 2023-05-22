import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_liftMulticastObservableUpperBounded from "../../Observable/__internal__/Observable.liftMulticastObservableUpperBounded.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";

const MulticastObservable_switchAll: MulticastObservable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_switchAll<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(Observable_liftMulticastObservableUpperBounded);

export default MulticastObservable_switchAll;
