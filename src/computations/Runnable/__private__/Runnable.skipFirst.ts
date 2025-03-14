import { newInstance } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class SkipFirstSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private cnt: number,
  ) {
    super(sink);
  }

  [EventListenerLike_notify](next: T): void {
    this.cnt = max(this.cnt - 1, -1);
    if (this.cnt < 0) {
      this[AbstractSink_delegate][EventListenerLike_notify](next);
    }
  }
}

const Runnable_skipFirst: Runnable.Signature["skipFirst"] = <T>(options?: {
  readonly count?: number;
}) =>
  Runnable_lift(
    (sink: SinkLike<T>) =>
      newInstance(
        SkipFirstSink<T>,
        sink,
        clampPositiveInteger(options?.count ?? 1),
      ),
    true,
  );

export default Runnable_skipFirst;
