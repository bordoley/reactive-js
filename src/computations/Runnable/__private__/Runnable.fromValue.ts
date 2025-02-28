import {
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  PureRunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";

class FromValueRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;
  readonly [ComputationLike_isInteractive]: false = false as const;

  constructor(private readonly v: T) {}

  [RunnableLike_eval](sink: SinkLike<T>): void {
    sink[SinkLike_next](this.v);
    sink[SinkLike_complete]();
  }
}

const Runnable_fromValue: Runnable.Signature["fromValue"] =
  <T>() =>
  (v: T) =>
    newInstance(FromValueRunnable, v);

export default Runnable_fromValue;
