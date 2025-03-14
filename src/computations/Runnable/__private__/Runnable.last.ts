import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { Optional, newInstance, none } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class LastSink<T> implements SinkLike<T> {
  public [SinkLike_isCompleted] = false;
  public v: Optional<T> = none;

  [SinkLike_next](next: T): void {
    this.v = next;
  }
  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_last: Runnable.Signature["last"] =
  <T>() =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(LastSink<T>);
    deferable[RunnableLike_eval](sink);
    return sink.v;
  };

export default Runnable_last;
