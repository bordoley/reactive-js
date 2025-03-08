import {
  ComputationLike_isPure,
  PureRunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
import { SinkLike, SinkLike_complete } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class EmptyRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;

  [RunnableLike_eval](sink: SinkLike<T>): void {
    sink[SinkLike_complete]();
  }
}

const Runnable_empty: Runnable.Signature["empty"] = /*@__PURE__*/ (() =>
  returns(newInstance(EmptyRunnable)))();

export default Runnable_empty;
