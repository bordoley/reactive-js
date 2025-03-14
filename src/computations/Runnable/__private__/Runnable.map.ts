import { Function1, newInstance } from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class MapSink<TA, TB> extends AbstractSink<TA, TB> {
  constructor(
    sink: SinkLike<TB>,
    private readonly s: Function1<TA, TB>,
  ) {
    super(sink);
  }

  [EventListenerLike_notify](next: TA): void {
    const mapped = this.s(next);
    this[AbstractSink_delegate][EventListenerLike_notify](mapped);
  }
}

const Runnable_map: Runnable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) =>
  Runnable_lift((sink: SinkLike<TB>) =>
    newInstance(MapSink<TA, TB>, sink, selector),
  );

export default Runnable_map;
