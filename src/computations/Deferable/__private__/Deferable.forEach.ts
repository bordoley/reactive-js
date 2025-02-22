import { SinkLike, SinkLike_next } from "../../../computations.js";
import { SideEffect1, newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

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

const Deferable_forEach: Deferable.Signature["forEach"] = <T>(
  ef: SideEffect1<T>,
) =>
  Deferable_lift((sink: SinkLike<T>) => newInstance(ForEachSink<T>, sink, ef));

export default Deferable_forEach;
