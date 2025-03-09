import { newInstance } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { SinkLike, SinkLike_complete, SinkLike_next } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class TakeFirstSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private cnt: number,
  ) {
    super(sink);

    if (cnt === 0) {
      this[SinkLike_complete]();
    }
  }

  [SinkLike_next](next: T): void {
    this.cnt = max(this.cnt - 1, -1);
    this[AbstractSink_delegate][SinkLike_next](next);

    if (this.cnt <= 0) {
      this[SinkLike_complete]();
    }
  }
}

const Runnable_takeFirst: Runnable.Signature["takeFirst"] = <T>(options?: {
  readonly count?: number;
}) =>
  Runnable_lift(
    (sink: SinkLike<T>) =>
      newInstance(
        TakeFirstSink<T>,
        sink,
        clampPositiveInteger(options?.count ?? 1),
      ),
    true,
  );

export default Runnable_takeFirst;
