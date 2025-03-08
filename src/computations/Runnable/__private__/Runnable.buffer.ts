import {
  Array_length,
  Array_push,
  MAX_SAFE_INTEGER,
} from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { newInstance } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class BufferSink<T> implements SinkLike<T> {
  public buffer: T[] = [];
  public [SinkLike_isComplete] = false;

  constructor(
    private readonly sink: SinkLike<readonly T[]>,
    private readonly count: number,
  ) {}
  [SinkLike_next](next: T): void {
    const { buffer, count } = this;

    buffer[Array_push](next);

    if (buffer[Array_length] === count) {
      this.buffer = [];
      this.sink[SinkLike_next](buffer);
    }
  }
  [SinkLike_complete]() {
    if (!this[SinkLike_isComplete]) {
      const { buffer } = this;
      this.buffer = [];
      if (buffer.length > 0) {
        this.sink[SinkLike_next](buffer);
      }
      this[SinkLike_isComplete] = true;
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
