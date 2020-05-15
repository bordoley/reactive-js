import { SinkLike, sinkDone } from "./interfaces.ts";

export abstract class AbstractSink<T> implements SinkLike<T> {
  constructor() {}

  abstract notify(next: T): void;

  done() {
    throw sinkDone;
  }
}

export abstract class AbstractDelegatingSink<TA, TB> implements SinkLike<TA> {
  constructor(readonly delegate: SinkLike<TB>) {}

  abstract notify(next: TA): void;

  done() {
    this.delegate.done();
  }
}
