import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { DeferredObservableContainer } from "../../containers.js";
import DeferredObservable_lift from "./DeferredObservable..lift.js";

const DeferredObservable_throttle: DeferredObservableContainer.TypeClass["throttle"] =
  /*@__PURE__*/ (<T>() =>
    HigherOrderObservable_throttle<DeferredObservableContainer.Type, T>(
      ReadonlyArray_toObservable,
      DeferredObservable_lift,
    ))();

export default DeferredObservable_throttle;
