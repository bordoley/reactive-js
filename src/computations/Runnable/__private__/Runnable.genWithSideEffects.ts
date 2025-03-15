import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike_eval,
  RunnableWithSideEffectsLike,
} from "../../../computations.js";
import { Factory, newInstance } from "../../../functions.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class GenWithSideEffectsRunnable<T> implements RunnableWithSideEffectsLike<T> {
  readonly [ComputationLike_isPure]: false = false as const;
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

const Runnable_genWithSideEffects: Runnable.Signature["genWithSideEffects"] = <
  T,
>(
  factory: Factory<Generator<T>>,
) => newInstance(GenWithSideEffectsRunnable<T>, factory);

export default Runnable_genWithSideEffects;
