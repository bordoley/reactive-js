import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import { DeferredObservableContainer } from "../../containers.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";

const DeferredObservable_switchAll: DeferredObservableContainer.TypeClass["switchAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<DeferredObservableContainer.Type>(
    DeferredObservable_lift,
  );

export default DeferredObservable_switchAll;
