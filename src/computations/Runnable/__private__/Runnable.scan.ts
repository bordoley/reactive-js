import { Factory, Reducer, newInstance } from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { SinkLike, SinkLike_next } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class ScanSink<T, TAcc> extends AbstractSink<T, TAcc> {
  constructor(
    sink: SinkLike<TAcc>,
    private r: Reducer<T, TAcc>,
    private acc: TAcc,
  ) {
    super(sink);
  }

  [SinkLike_next](next: T): void {
    const nextAcc = this.r(this.acc, next);
    this.acc = nextAcc;
    this[AbstractSink_delegate][SinkLike_next](nextAcc);
  }
}

const Runnable_scan: Runnable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  Runnable_lift(
    (sink: SinkLike<TAcc>) =>
      newInstance(ScanSink<T, TAcc>, sink, reducer, initialValue()),
    true,
  );

export default Runnable_scan;
