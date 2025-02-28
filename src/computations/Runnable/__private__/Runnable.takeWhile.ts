import {
  SinkLike,
  SinkLike_complete,
  SinkLike_next,
} from "../../../computations.js";
import { Predicate, newInstance } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";

class TakeWhileSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private p: Predicate<T>,
    private inclusive?: boolean,
  ) {
    super(sink);
  }

  [SinkLike_next](next: T): void {
    const satisfiesPredicate = this.p(next);

    if (satisfiesPredicate || this.inclusive) {
      this[AbstractSink_delegate][SinkLike_next](next);
    }

    if (!satisfiesPredicate) {
      this[SinkLike_complete]();
    }
  }
}

const Runnable_takeWhile: Runnable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  Runnable_lift(
    (sink: SinkLike<T>) =>
      newInstance(
        TakeWhileSink<T>,
        sink,
        predicate,
        options?.inclusive ?? false,
      ),
    true,
  );

export default Runnable_takeWhile;
