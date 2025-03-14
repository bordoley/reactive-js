import { Predicate, newInstance } from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";

import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class KeepSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private readonly p: Predicate<T>,
  ) {
    super(sink);
  }
  [EventListenerLike_notify](next: T): void {
    if (this.p(next)) {
      this[AbstractSink_delegate][EventListenerLike_notify](next);
    }
  }
}

const Runnable_keep: Runnable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  Runnable_lift((sink: SinkLike<T>) =>
    newInstance(KeepSink<T>, sink, predicate),
  );

export default Runnable_keep;
