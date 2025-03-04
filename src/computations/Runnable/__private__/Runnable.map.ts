import { SinkLike, SinkLike_next } from "../../../computations.js";
import { Function1, newInstance } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Runnable_lift from "./Runnable.lift.js";

class MapSink<TA, TB> extends AbstractSink<TA, TB> {
  constructor(
    sink: SinkLike<TB>,
    private readonly s: Function1<TA, TB>,
  ) {
    super(sink);
  }

  [SinkLike_next](next: TA): void {
    const mapped = this.s(next);
    this[AbstractSink_delegate][SinkLike_next](mapped);
  }
}

const Runnable_map: Runnable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) =>
  Runnable_lift((sink: SinkLike<TB>) =>
    newInstance(MapSink<TA, TB>, sink, selector),
  );

export default Runnable_map;
