import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import type * as SharedObservable from "../../SharedObservable.js";
import SharedObservable_lift from "./SharedObservable.lift.js";

const SharedObservable_switchAll: SharedObservable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_switchAll<
    SharedObservable.Type,
    DeferredObservable.Type
  >(SharedObservable_lift);

export default SharedObservable_switchAll;
