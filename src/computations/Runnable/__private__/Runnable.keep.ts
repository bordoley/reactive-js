import { SinkLike, SinkLike_next } from "../../../computations.js";
import { Predicate, newInstance } from "../../../functions.js";

import type * as Runnable from "../../Runnable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";

class KeepSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private readonly p: Predicate<T>,
  ) {
    super(sink);
  }
  [SinkLike_next](next: T): void {
    if (this.p(next)) {
      this[AbstractSink_delegate][SinkLike_next](next);
    }
  }
}

const Runnable_keep: Runnable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  Runnable_lift(
    (sink: SinkLike<T>) => newInstance(KeepSink<T>, sink, predicate),
    true,
  );

export default Runnable_keep;
