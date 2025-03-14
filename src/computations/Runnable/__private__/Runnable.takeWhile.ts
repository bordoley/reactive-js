import { Predicate, newInstance } from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class TakeWhileSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private p: Predicate<T>,
    private inclusive?: boolean,
  ) {
    super(sink);
  }

  [EventListenerLike_notify](next: T): void {
    const satisfiesPredicate = this.p(next);

    if (satisfiesPredicate || this.inclusive) {
      this[AbstractSink_delegate][EventListenerLike_notify](next);
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
