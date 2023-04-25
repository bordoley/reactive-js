import { errorWithDebugMessage } from "../../../functions.js";
import {
  ObservableLike_isRunnable,
  RunnableLike,
  ToRunnable,
} from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { FlowableLike } from "../../../streaming.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("Flowable is not Runnable"),
};

const Flowable_toRunnable: ToRunnable<FlowableLike>["toRunnable"] =
  <T>() =>
  (flowable: FlowableLike<T>) =>
    flowable[ObservableLike_isRunnable]
      ? (flowable as RunnableLike<T>)
      : Observable_throws<T>(throwOptions);

export default Flowable_toRunnable;
