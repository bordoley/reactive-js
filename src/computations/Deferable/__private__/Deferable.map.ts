import { SinkLike, SinkLike_next } from "../../../computations.js";
import { Function1, newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import Deferable_lift from "./Deferable.lift.js";

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

const Deferable_map: Deferable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) =>
  Deferable_lift(
    (sink: SinkLike<TB>) => newInstance(MapSink<TA, TB>, sink, selector),
    true,
  );

export default Deferable_map;
