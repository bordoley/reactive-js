import { ConcatAll } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservableLike__switchAll from "../HigherOrderObservableLike/HigherOrderObservableLike.switchAll";
import RunnableObservableLike__lift from "./RunnableObservableLike.lift";

const RunnableObservableLike__switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservableLike__switchAll<RunnableObservableLike>(
    RunnableObservableLike__lift,
  );

export default RunnableObservableLike__switchAll;
