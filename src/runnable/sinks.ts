import { addDisposable, bindDisposables } from "../disposable";
import { __DEV__ } from "../env";
import { AbstractSink, SinkLike } from "../sink";

export abstract class AbstractDelegatingSink<TA, TB> extends AbstractSink<TA> {
  constructor(readonly delegate: SinkLike<TB>) {
    super();
    addDisposable(delegate, this);
  }
}

export abstract class AbstractAutoDisposingDelegatingSink<
  TA,
  TB,
> extends AbstractSink<TA> {
  constructor(readonly delegate: SinkLike<TB>) {
    super();
    bindDisposables(this, delegate);
  }
}

class DelegatingSink<T> extends AbstractSink<T> {
  constructor(readonly delegate: SinkLike<T>) {
    super();
    addDisposable(delegate, this);
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingSink = <T>(delegate: SinkLike<T>): SinkLike<T> =>
  new DelegatingSink(delegate);
