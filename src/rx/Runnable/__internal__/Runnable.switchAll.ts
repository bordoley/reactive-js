import { RunnableContainerLike, SwitchAll } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_switchAll: SwitchAll<RunnableContainerLike>["switchAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<RunnableContainerLike>(
    Runnable_lift,
  );

export default Runnable_switchAll;
