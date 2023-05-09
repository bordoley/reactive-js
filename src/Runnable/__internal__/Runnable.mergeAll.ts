import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_mergeAll: RunnableContainer.TypeClass["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<RunnableContainer.Type>(
    Runnable_lift,
  );

export default Runnable_mergeAll;
