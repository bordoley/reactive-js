import { SinkLike, SinkLike_next } from "../../../computations.js";
import { Predicate, newInstance } from "../../../functions.js";

import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

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

const Deferable_keep: Deferable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  Deferable_lift(
    (sink: SinkLike<T>) => newInstance(KeepSink<T>, sink, predicate),
    true,
  );

export default Deferable_keep;
