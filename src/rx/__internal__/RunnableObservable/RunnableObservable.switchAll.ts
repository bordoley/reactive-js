import { ConcatAll } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservable$switchAll from "../HigherOrderObservable/HigherOrderObservable.switchAll";
import RunnableObservable$lift from "./RunnableObservable.lift";

const RunnableObservable$switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable$switchAll<RunnableObservableLike>(
    RunnableObservable$lift,
  );

export default RunnableObservable$switchAll;
