import {
  RunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { Optional, newInstance, none } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";

class LastSink<T> implements SinkLike<T> {
  public [SinkLike_isComplete] = false;
  public v: Optional<T> = none;

  [SinkLike_next](next: T): void {
    this.v = next;
  }
  [SinkLike_complete]() {
    this[SinkLike_isComplete] = true;
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
