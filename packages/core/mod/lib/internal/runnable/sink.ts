import { SinkLike } from "./interfaces.ts";

export abstract class AbstractSink<T> implements SinkLike<T> {
  isDone = false;

  constructor() {}

  abstract notify(next: T): void;

  done(): void {
    this.isDone = true;
  }
}

export abstract class AbstractDelegatingSink<TA, TB> implements SinkLike<TA> {
  isDone = false;

  constructor(readonly delegate: SinkLike<TB>) {}

  abstract notify(next: TA): void;

  done(): void {
    this.isDone = true;
    this.delegate.done();
  }
}
