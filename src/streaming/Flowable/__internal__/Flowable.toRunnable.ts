import { pipe } from "../../../functions.js";
import { RunnableLike, ToRunnable } from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { FlowableLike, StreamableLike_isRunnable } from "../../../streaming.js";
import Flowable_toObservable from "./Flowable.toObservable.js";

const Flowable_toRunnable: ToRunnable<FlowableLike>["toRunnable"] =
  <T>() =>
  (enumerable: FlowableLike<T>) =>
    enumerable[StreamableLike_isRunnable]
      ? (pipe(enumerable, Flowable_toObservable<T>()) as RunnableLike<T>)
      : Observable_throws<T>();

export default Flowable_toRunnable;
