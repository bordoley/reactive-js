import { ReactiveContainer, RunnableContainer } from "../../../core.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_mergeAll: ReactiveContainer.TypeClass<RunnableContainer>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<RunnableContainer>(
    Runnable_lift,
  );

export default Runnable_mergeAll;
