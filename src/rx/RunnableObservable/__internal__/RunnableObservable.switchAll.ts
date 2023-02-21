import { ConcatAll } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.switchAll.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";

const RunnableObservable_switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<RunnableObservableLike>(
    RunnableObservable_lift,
  );

export default RunnableObservable_switchAll;
