import { ConcatAll } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservable_switchAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.switchAll";
import RunnableObservable_lift from "./RunnableObservable.lift";

const RunnableObservable_switchAll: ConcatAll<RunnableObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<RunnableObservableLike>(
    RunnableObservable_lift,
  );

export default RunnableObservable_switchAll;
