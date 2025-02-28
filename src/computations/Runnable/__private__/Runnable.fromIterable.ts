import {
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  IterableLike,
  RunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";

class FromIterableRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isInteractive]: false = false as const;

  constructor(private readonly i: IterableLike<T>) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure] ?? true;
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    for (const v of this.i) {
      if (sink[SinkLike_isComplete]) {
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
