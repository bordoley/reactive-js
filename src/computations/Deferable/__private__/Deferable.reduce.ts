import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { Factory, Reducer, newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

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

const Deferable_reduce: Deferable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (deferable: DeferableLike<T>) => {
    const sink = newInstance(ReducerSink, reducer, initialValue());
    deferable[DeferableLike_eval](sink);
    return sink.acc;
  };

export default Deferable_reduce;
