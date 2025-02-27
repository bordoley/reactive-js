import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { Optional, isSome, newInstance, none } from "../../../functions.js";
import * as Queue from "../../../utils/Queue.js";
import {
  DropOldestBackpressureStrategy,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Deferable from "../../Deferable.js";
import Deferable_lift from "./Deferable.lift.js";

class TakeLastSink<T> implements SinkLike<T> {
  public [SinkLike_isComplete] = false;
  private readonly q: QueueLike<T>;

  constructor(
    private readonly sink: SinkLike<T>,
    cnt: number,
  ) {
    this.q = Queue.create({
      capacity: cnt,
      backpressureStrategy: DropOldestBackpressureStrategy,
    });
  }

  [SinkLike_next](next: T): void {
    this.q[QueueableLike_enqueue](next);
  }

  [SinkLike_complete](): void {
    this[SinkLike_isComplete] = true;
    const queue = this.q;
    const sink = this.sink;

    let v: Optional<T> = none;
    while (
      ((v = queue[QueueLike_dequeue]()),
      !sink[SinkLike_isComplete] && isSome(v))
    ) {
      sink[SinkLike_next](v as T);
    }

    sink[SinkLike_complete]();
  }
}

const Deferable_takeLast: Deferable.Signature["takeLast"] = <T>(options?: {
  readonly count?: number;
}) =>
  Deferable_lift(
    (sink: SinkLike<T>) =>
      newInstance(
        TakeLastSink<T>,
        sink,
        clampPositiveInteger(options?.count ?? 1),
      ),
    true,
  );

export default Deferable_takeLast;
