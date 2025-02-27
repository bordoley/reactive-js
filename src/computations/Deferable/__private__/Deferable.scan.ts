import { SinkLike, SinkLike_next } from "../../../computations.js";
import { Factory, Reducer, newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

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

const Deferable_scan: Deferable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  Deferable_lift(
    (sink: SinkLike<TAcc>) =>
      newInstance(ScanSink<T, TAcc>, sink, reducer, initialValue()),
    true,
  );

export default Deferable_scan;
