import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { Factory, Reducer, newInstance } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class ReducerSink<T, TAcc> implements SinkLike<T> {
  public [SinkLike_isComplete] = false;

  constructor(
    private readonly r: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {}

  [SinkLike_next](next: T): void {
    this.acc = this.r(this.acc, next);
  }
  [SinkLike_complete]() {
    this[SinkLike_isComplete] = true;
  }
}

const Runnable_reduce: Runnable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(ReducerSink, reducer, initialValue());
    deferable[RunnableLike_eval](sink);
    return sink.acc;
  };

export default Runnable_reduce;
