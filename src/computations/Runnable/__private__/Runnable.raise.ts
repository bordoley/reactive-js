import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  PureRunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { Factory, error, newInstance, raise } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class RaiseRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(private readonly r: Factory<unknown>) {}

  [RunnableLike_eval](_: SinkLike<T>): void {
    raise(error(this.r()));
  }
}

const Runnable_raise: Runnable.Signature["raise"] = <T>(options?: {
  readonly raise?: Factory<unknown>;
}) => {
  const { raise: factory = raise } = options ?? {};
  return newInstance(RaiseRunnable<T>, factory);
};

export default Runnable_raise;
