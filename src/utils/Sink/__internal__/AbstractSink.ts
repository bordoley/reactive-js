import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_next,
} from "../../../utils.js";

export const AbstractSink_delegate = Symbol("AbstractSink_delegate");

abstract class AbstractSink<
  TA,
  TB = TA,
  TDelegate extends SinkLike<TB> = SinkLike<TB>,
> implements SinkLike<TA>
{
  public [SinkLike_isCompleted] = false;
  public [AbstractSink_delegate]: TDelegate;

  constructor(sink: TDelegate) {
    this[AbstractSink_delegate] = sink;
  }

  abstract [SinkLike_next](next: TA): void;

  [SinkLike_complete]() {
    if (!this[SinkLike_isCompleted]) {
      this[SinkLike_isCompleted] = true;
      this[AbstractSink_delegate][SinkLike_complete]();
    }
  }
}

export default AbstractSink;
