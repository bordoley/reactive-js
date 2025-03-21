import {
  Array_length,
  Array_push,
  MAX_SAFE_INTEGER,
} from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class BufferSink<T>
  extends AbstractDelegatingDisposableSink<T>
  implements SinkLike<T>
{
  public buffer: T[] = [];
  public [SinkLike_isCompleted] = false;

  constructor(
    private readonly sink: SinkLike<readonly T[]>,
    private readonly count: number,
  ) {
    super(sink);
  }

  [EventListenerLike_notify](next: T): void {
    const { buffer, count } = this;

    buffer[Array_push](next);

    if (buffer[Array_length] === count) {
      this.buffer = [];
      this.sink[EventListenerLike_notify](buffer);
    }
  }
  [SinkLike_complete]() {
    if (!this[SinkLike_isCompleted]) {
      const { buffer } = this;
      this.buffer = [];
      if (buffer[Array_length] > 0) {
        this.sink[EventListenerLike_notify](buffer);
      }
      this[SinkLike_isCompleted] = true;
      this.sink[SinkLike_complete]();
    }
  }
}

const Runnable_buffer: Runnable.Signature["buffer"] = <T>(options?: {
  count?: number;
}) =>
  Runnable_lift(
    (sink: SinkLike<readonly T[]>) =>
      newInstance(
        BufferSink<T>,
        sink,
        clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER),
      ),
    true,
  );

export default Runnable_buffer;
