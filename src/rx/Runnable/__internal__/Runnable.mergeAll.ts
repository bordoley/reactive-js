import { MergeAll, RunnableContainerLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_mergeAll: MergeAll<RunnableContainerLike>["mergeAll"] =
  /*@__PURE__*/ HigherOrderObservable_mergeAll<RunnableContainerLike>(
    Runnable_lift,
  );

export default Runnable_mergeAll;
