import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import MulticastObservable_lift from "./MulticastObservable.lift.js";

const MulticastObservable_mergeAll: MulticastObservable.Signature["mergeAll"] =
  /*@__PURE__*/ Observable_mergeAll<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(MulticastObservable_lift);

export default MulticastObservable_mergeAll;
