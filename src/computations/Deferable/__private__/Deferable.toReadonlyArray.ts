import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

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

const Deferable_toReadonlyArray: Deferable.Signature["toReadonlyArray"] =
  <T>() =>
  (deferable: DeferableLike<T>) => {
    const sink = newInstance(ToReadonlyArraySink<T>);
    deferable[DeferableLike_eval](sink);
    return sink.acc;
  };

export default Deferable_toReadonlyArray;
