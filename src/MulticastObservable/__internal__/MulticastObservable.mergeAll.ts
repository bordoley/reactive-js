import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_liftMulticastObservableUpperBounded from "../../Observable/__internal__/Observable.liftMulticastObservableUpperBounded.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";

const MulticastObservable_mergeAll: MulticastObservable.Signature["mergeAll"] =
  /*@__PURE__*/ Observable_mergeAll<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(Observable_liftMulticastObservableUpperBounded);

export default MulticastObservable_mergeAll;
