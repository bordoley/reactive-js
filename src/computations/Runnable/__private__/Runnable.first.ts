import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { Optional, newInstance, none } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_push,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class FirstSink<T> implements SinkLike<T> {
  public [SinkLike_isCompleted] = false;
  public v: Optional<T> = none;

  [SinkLike_push](next: T): void {
    this.v = next;
    this[SinkLike_complete]();
  }
  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_first: Runnable.Signature["first"] =
  <T>() =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(FirstSink<T>);
    deferable[RunnableLike_eval](sink);
    return sink.v;
  };

export default Runnable_first;
