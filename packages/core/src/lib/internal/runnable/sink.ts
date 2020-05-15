import { SinkLike } from "./interfaces";

export abstract class AbstractSink<T> implements SinkLike<T> {
  isDone = false;

  constructor() {}

  abstract notify(next: T): void;

  done(): void {
    this.isDone = true;
  }
}

export abstract class AbstractDelegatingSink<TA, TB> implements SinkLike<TA> {
  constructor(readonly delegate: SinkLike<TB>) {}

  get isDone() {
    return this.delegate.isDone;
  }

  abstract notify(next: TA): void;

  done(): void {
    this.delegate.done();
  }
}
