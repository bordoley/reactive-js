import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class ToReadonlyArraySink<T> implements SinkLike<T> {
  public [SinkLike_isComplete] = false;
  public acc: T[] = [];

  [SinkLike_next](next: T): void {
    this.acc.push(next);
  }
  [SinkLike_complete]() {
    this[SinkLike_isComplete] = true;
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
