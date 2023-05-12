import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";

const DeferredObservable_switchAll: DeferredObservable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_switchAll<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(DeferredObservable_lift);

export default DeferredObservable_switchAll;
