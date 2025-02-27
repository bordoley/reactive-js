import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { SinkLike, SinkLike_next } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

class SkipFirstSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private cnt: number,
  ) {
    super(sink);
  }

  [SinkLike_next](next: T): void {
    this.cnt = max(this.cnt - 1, -1);
    if (this.cnt < 0) {
      this[AbstractSink_delegate][SinkLike_next](next);
    }
  }
}

const Deferable_skipFirst: Deferable.Signature["skipFirst"] = <T>(options?: {
  readonly count?: number;
}) =>
  Deferable_lift(
    (sink: SinkLike<T>) =>
      newInstance(
        SkipFirstSink<T>,
        sink,
        clampPositiveInteger(options?.count ?? 1),
      ),
    true,
  );

export default Deferable_skipFirst;
