import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  PureRunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { error, newInstance } from "../../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class FromReadonlyArrayRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly arr: readonly T[],
    private readonly count: number,
    private readonly start: number,
  ) {}

  [RunnableLike_eval](sink: SinkLike<T>): void {
    try {
      let { arr, start, count } = this;
      while (count !== 0 && !sink[SinkLike_isCompleted]) {
        const next = arr[start];
        sink[EventListenerLike_notify](next);

        count > 0 ? (start++, count--) : (start--, count++);
      }
      sink[SinkLike_complete]();
    } catch (e) {
      sink[DisposableLike_dispose](error(e));
    }
  }
}

const Runnable_fromReadonlyArray: Runnable.Signature["fromReadonlyArray"] =
  <T>(options?: { count?: number; start?: number }) =>
  (arr: readonly T[]) => {
    let [start, count] = parseArrayBounds(arr, options);

    return newInstance(FromReadonlyArrayRunnable, arr, count, start);
  };

export default Runnable_fromReadonlyArray;
