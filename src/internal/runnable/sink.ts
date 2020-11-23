import { SinkLike } from "../../runnable";

export const sinkDone = Symbol("@reactive-js/core/lib/runnable/sinkDone");

export abstract class AbstractSink<T> implements SinkLike<T> {
  isDone = false;

  abstract notify(next: T): void;

  done() {
    if (!this.isDone) {
      this.isDone = true;
      throw sinkDone;
    }
  }
}

export abstract class AbstractDelegatingSink<TA, TB> implements SinkLike<TA> {
  constructor(readonly delegate: SinkLike<TB>) {}

  get isDone() {
    return this.delegate.isDone;
  }

  abstract notify(next: TA): void;

  done() {
    this.delegate.done();
  }
}
