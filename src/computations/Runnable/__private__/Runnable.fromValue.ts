import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  PureRunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
import {
  ListenerLike_notify,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class FromValueRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(private readonly v: T) {}

  [RunnableLike_eval](sink: SinkLike<T>): void {
    sink[ListenerLike_notify](this.v);
    sink[SinkLike_complete]();
  }
}

const Runnable_fromValue: Runnable.Signature["fromValue"] =
  /*@__PURE__*/ returns(v => newInstance(FromValueRunnable, v));

export default Runnable_fromValue;
