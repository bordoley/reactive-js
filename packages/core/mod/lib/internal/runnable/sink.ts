import { SinkLike, sinkDone } from "./interfaces.ts";

export abstract class AbstractSink<T> implements SinkLike<T> {
  isDone = false;

  constructor() {}

  abstract notify(next: T): void;

  done() {
    if(!this.isDone) {
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
