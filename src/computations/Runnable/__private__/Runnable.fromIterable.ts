import {
  ComputationLike_isPure,
  IterableLike,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_next,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class FromIterableRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(private readonly i: IterableLike<T>) {
    this[ComputationLike_isPure] = Computation.isPure(i);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    for (const v of this.i) {
      if (sink[SinkLike_isCompleted]) {
        break;
      }

      sink[SinkLike_next](v);
    }

    sink[SinkLike_complete]();
  }
}

const Runnable_fromIterable: Runnable.Signature["fromIterable"] = (<T>() =>
  (iterable: IterableLike<T>) =>
    newInstance(
      FromIterableRunnable<T>,
      iterable,
    )) as Runnable.Signature["fromIterable"];

export default Runnable_fromIterable;
