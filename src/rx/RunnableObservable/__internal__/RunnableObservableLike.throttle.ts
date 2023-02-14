import { FromReadonlyArray } from "../../../containers";
import { RunnableObservableLike, Throttle } from "../../../rx";
import Observable_fromReadonlyArray from "../../Observable/__internal__/Observable.fromReadonlyArray";
import HigherOrderObservable_throttle from "../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle";
import RunnableObservable_lift from "./RunnableObservable.lift";

const RunnableObservable_throttle: Throttle<RunnableObservableLike>["throttle"] =
  /*@__PURE__*/ (<T>() =>
    HigherOrderObservable_throttle<RunnableObservableLike, T>(
      Observable_fromReadonlyArray as FromReadonlyArray<
        RunnableObservableLike,
        {
          readonly delay?: number;
          readonly delayStart?: boolean;
        }
      >["fromReadonlyArray"],
      RunnableObservable_lift,
    ))();

export default RunnableObservable_throttle;
