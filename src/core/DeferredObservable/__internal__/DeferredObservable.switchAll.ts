import {
  DeferredObservableContainer,
  ObservableContainers,
} from "../../../core.js";
import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";

const DeferredObservable_switchAll: ObservableContainers.TypeClass<DeferredObservableContainer>["switchAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<DeferredObservableContainer>(
    DeferredObservable_lift,
  );

export default DeferredObservable_switchAll;
