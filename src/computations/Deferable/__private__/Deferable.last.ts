import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { Optional, newInstance, none } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

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

const Deferable_last: Deferable.Signature["last"] =
  <T>() =>
  (deferable: DeferableLike<T>) => {
    const sink = newInstance(LastSink<T>);
    deferable[DeferableLike_eval](sink);
    return sink.v;
  };

export default Deferable_last;
