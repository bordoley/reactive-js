import { SideEffect1, newInstance } from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { SinkLike, SinkLike_push } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class ForEachSink<T> extends AbstractSink<T> {
  constructor(
    sink: SinkLike<T>,
    private readonly ef: SideEffect1<T>,
  ) {
    super(sink);
  }

  [SinkLike_push](next: T): void {
    this.ef(next);
    this[AbstractSink_delegate][SinkLike_push](next);
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
