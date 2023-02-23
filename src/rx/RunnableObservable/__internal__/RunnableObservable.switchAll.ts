import { RunnableObservableLike, SwitchAll } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";

const RunnableObservable_switchAll: SwitchAll<RunnableObservableLike>["switchAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<RunnableObservableLike>(
    RunnableObservable_lift,
  );

export default RunnableObservable_switchAll;
