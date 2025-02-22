import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";

export const AbstractSink_delegate = Symbol("AbstractSink_delegate");

abstract class AbstractSink<TA, TB = TA> implements SinkLike<TA> {
  public [SinkLike_isComplete] = false;
  public [AbstractSink_delegate]: SinkLike<TB>;

  constructor(sink: SinkLike<TB>) {
    this[AbstractSink_delegate] = sink;
  }

  abstract [SinkLike_next](next: TA): void;

  [SinkLike_complete]() {
    if (!this[SinkLike_isComplete]) {
      this[SinkLike_isComplete] = true;
      this[AbstractSink_delegate][SinkLike_complete]();
    }
  }
}

export default AbstractSink;
