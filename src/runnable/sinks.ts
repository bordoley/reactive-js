import {
  AbstractDisposable,
  addDisposable,
  bindDisposables,
} from "../disposable";
import { __DEV__ } from "../env";
import { raise, SideEffect1 } from "../functions";
import { RunnableLike } from "../runnable";
import { SinkLike } from "../sink";

export abstract class AbstractSink<T>
  extends AbstractDisposable
  implements SinkLike<T>
{
  assertState(this: SinkLike<T>): void {}

  notify(_: T): void {}
}

if (__DEV__) {
  AbstractSink.prototype.assertState = function <T>(this: SinkLike<T>) {
    if (this.isDisposed) {
      raise("Sink is disposed");
    }
  };
}

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

export const sink =
  <T>(observer: SinkLike<T>): SideEffect1<RunnableLike<T>> =>
  observable =>
    observable.run(observer);
