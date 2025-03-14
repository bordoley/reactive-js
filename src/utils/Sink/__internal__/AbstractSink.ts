import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import AbstractDelegatingDisposableSink from "./AbstractDelegatingDisposableSink.js";

export const AbstractSink_delegate = Symbol("AbstractSink_delegate");

abstract class AbstractSink<
    TA,
    TB = TA,
    TDelegate extends SinkLike<TB> = SinkLike<TB>,
  >
  extends AbstractDelegatingDisposableSink<TA>
  implements SinkLike<TA>
{
  public [SinkLike_isCompleted] = false;
  public [AbstractSink_delegate]: TDelegate;

  constructor(sink: TDelegate) {
    super(sink);
    this[AbstractSink_delegate] = sink;
  }

  abstract [EventListenerLike_notify](next: TA): void;

  [SinkLike_complete]() {
    if (!this[SinkLike_isCompleted]) {
      this[SinkLike_isCompleted] = true;
      this[AbstractSink_delegate][SinkLike_complete]();
    }
  }
}

export default AbstractSink;
