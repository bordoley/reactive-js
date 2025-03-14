import {
  ComputationLike_isPure,
  PureRunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { SinkLike, SinkLike_complete, SinkLike_push } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class FromValueRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;

  constructor(private readonly v: T) {}

  [RunnableLike_eval](sink: SinkLike<T>): void {
    sink[SinkLike_push](this.v);
    sink[SinkLike_complete]();
  }
}

const Runnable_fromValue: Runnable.Signature["fromValue"] =
  <T>() =>
  (v: T) =>
    newInstance(FromValueRunnable, v);

export default Runnable_fromValue;
