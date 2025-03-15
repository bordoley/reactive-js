import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  PureRunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { Factory, newInstance } from "../../../functions.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class GenRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(private readonly f: Factory<Generator<T>>) {}

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const iter = this.f();
    for (const v of iter) {
      if (sink[SinkLike_isCompleted]) {
        break;
      }

      sink[EventListenerLike_notify](v);
    }

    sink[SinkLike_complete]();
  }
}

const Runnable_gen: Runnable.Signature["gen"] = <T>(
  factory: Factory<Generator<T>>,
) => newInstance(GenRunnable<T>, factory);

export default Runnable_gen;
