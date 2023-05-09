import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import {
  DeferredObservableContainer,
  ObservableContainers,
} from "../../types.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";

const DeferredObservable_mergeAll: ObservableContainers.TypeClass<DeferredObservableContainer>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<DeferredObservableContainer>(
    DeferredObservable_lift,
  );

export default DeferredObservable_mergeAll;
