import { Optional, isSome, newInstance, none } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Queue from "../../../utils/Queue.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import {
  EventListenerLike_notify,
  QueueLike,
  QueueLike_dequeue,
  QueueLike_enqueue,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class TakeLastSink<T>
  extends AbstractDelegatingDisposableSink<T>
  implements SinkLike<T>
{
  public [SinkLike_isCompleted] = false;
  private readonly q: QueueLike<T>;

  constructor(
    private readonly sink: SinkLike<T>,
    cnt: number,
  ) {
    super(sink);

    this.q = Queue.createDropOldest<T>(cnt);
  }

  [EventListenerLike_notify](next: T): void {
    this.q[QueueLike_enqueue](next);
  }

  [SinkLike_complete](): void {
    this[SinkLike_isCompleted] = true;
    const queue = this.q;
    const sink = this.sink;

    let v: Optional<T> = none;
    while (
      ((v = queue[QueueLike_dequeue]()),
      !sink[SinkLike_isCompleted] && isSome(v))
    ) {
      sink[EventListenerLike_notify](v as T);
    }

    sink[SinkLike_complete]();
  }
}

const Runnable_takeLast: Runnable.Signature["takeLast"] = <T>(options?: {
  readonly count?: number;
}) =>
  Runnable_lift(
    (sink: SinkLike<T>) =>
      newInstance(
        TakeLastSink<T>,
        sink,
        clampPositiveInteger(options?.count ?? 1),
      ),
    true,
  );

export default Runnable_takeLast;
