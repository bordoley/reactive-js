import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_switchAll: RunnableContainer.TypeClass["switchAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<RunnableContainer.Type>(
    Runnable_lift,
  );

export default Runnable_switchAll;
