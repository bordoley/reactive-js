import {
  DeferredObservableContainer,
  ObservableContainers,
} from "../../../core.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import DeferredObservable_lift from "./DeferredObservable..lift.js";

const DeferredObservable_throttle: ObservableContainers.TypeClass<DeferredObservableContainer>["throttle"] =
  /*@__PURE__*/ (<T>() =>
    HigherOrderObservable_throttle<DeferredObservableContainer, T>(
      ReadonlyArray_toObservable,
      DeferredObservable_lift,
    ))();

export default DeferredObservable_throttle;
