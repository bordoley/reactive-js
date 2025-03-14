import { Array_push } from "../../../__internal__/constants.js";
import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class ToReadonlyArraySink<T> implements SinkLike<T> {
  public [SinkLike_isCompleted] = false;
  public acc: T[] = [];

  [SinkLike_next](next: T): void {
    this.acc[Array_push](next);
  }
  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_toReadonlyArray: Runnable.Signature["toReadonlyArray"] =
  <T>() =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(ToReadonlyArraySink<T>);
    deferable[RunnableLike_eval](sink);
    return sink.acc;
  };

export default Runnable_toReadonlyArray;
