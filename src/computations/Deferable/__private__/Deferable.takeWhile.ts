import {
  SinkLike,
  SinkLike_complete,
  SinkLike_next,
} from "../../../computations.js";
import { Predicate, newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

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

const Deferable_takeWhile: Deferable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  Deferable_lift(
    (sink: SinkLike<T>) =>
      newInstance(
        TakeWhileSink<T>,
        sink,
        predicate,
        options?.inclusive ?? false,
      ),
    true,
  );

export default Deferable_takeWhile;
