import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { Optional, newInstance, none } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class FirstSink<T> implements SinkLike<T> {
  public [SinkLike_isComplete] = false;
  public v: Optional<T> = none;

  [SinkLike_next](next: T): void {
    this.v = next;
    this[SinkLike_complete]();
  }
  [SinkLike_complete]() {
    this[SinkLike_isComplete] = true;
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
