import { SinkLike, SinkLike_next } from "../../../computations.js";
import { SideEffect1, newInstance } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";

class ForEachSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private readonly ef: SideEffect1<T>,
  ) {
    super(sink);
  }

  [SinkLike_next](next: T): void {
    this.ef(next);
    this[AbstractSink_delegate][SinkLike_next](next);
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
