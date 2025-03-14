import { SideEffect1, newInstance } from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class ForEachSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private readonly ef: SideEffect1<T>,
  ) {
    super(sink);
  }

  [EventListenerLike_notify](next: T): void {
    this.ef(next);
    this[AbstractSink_delegate][EventListenerLike_notify](next);
  }
}

const Runnable_forEach: Runnable.Signature["forEach"] = <T>(
  ef: SideEffect1<T>,
) =>
  Runnable_lift(
    (sink: SinkLike<T>) => newInstance(ForEachSink<T>, sink, ef),
    false,
  );

export default Runnable_forEach;
