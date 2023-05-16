import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import MulticastObservable_lift from "./MulticastObservable.lift.js";

const MulticastObservable_switchAll: MulticastObservable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_switchAll<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(MulticastObservable_lift);

export default MulticastObservable_switchAll;
