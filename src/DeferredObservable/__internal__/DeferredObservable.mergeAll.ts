import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import { DeferredObservableContainer } from "../../containers.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";

const DeferredObservable_mergeAll: DeferredObservableContainer.TypeClass["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<DeferredObservableContainer.Type>(
    DeferredObservable_lift,
  );

export default DeferredObservable_mergeAll;
