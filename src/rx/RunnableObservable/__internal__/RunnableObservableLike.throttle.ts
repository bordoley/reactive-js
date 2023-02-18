import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import { RunnableObservableLike, Throttle } from "../../../rx";
import HigherOrderObservable_throttle from "../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle";
import RunnableObservable_lift from "./RunnableObservable.lift";

const RunnableObservable_throttle: Throttle<RunnableObservableLike>["throttle"] =
  /*@__PURE__*/ (<T>() =>
    HigherOrderObservable_throttle<RunnableObservableLike, T>(
      ReadonlyArray_toRunnableObservable,
      RunnableObservable_lift,
    ))();

export default RunnableObservable_throttle;
