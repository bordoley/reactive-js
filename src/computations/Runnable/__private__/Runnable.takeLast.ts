import {
  Optional,
  isSome,
  newInstance,
  none,
  pipe,
} from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import {
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  QueueLike,
  QueueLike_dequeue,
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

    this.q = pipe(
      Queue.create<T>({
        capacity: cnt,
        backpressureStrategy: DropOldestBackpressureStrategy,
      }),
      Disposable.addTo(this),
    );
  }

  [EventListenerLike_notify](next: T): void {
    this.q[EventListenerLike_notify](next);
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
