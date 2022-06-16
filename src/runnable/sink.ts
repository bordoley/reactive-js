import {
  AbstractDisposable,
  addDisposable,
  bindDisposables,
} from "../disposable";
import { __DEV__ } from "../env";
import { ignore, raise, SideEffect1 } from "../functions";
import { SinkLike } from "../runnable";

const assertSinkStateProduction = ignore;
const assertSinkStateDev = <T>(observer: SinkLike<T>) => {
  if (observer.isDisposed) {
    raise("Sink is disposed");
  }
};

const _assertSinkState = __DEV__
  ? assertSinkStateDev
  : assertSinkStateProduction;

export const assertSinkState: SideEffect1<SinkLike<unknown>> = _assertSinkState;

export abstract class AbstractSink<T>
  extends AbstractDisposable
  implements SinkLike<T>
{
  abstract notify(next: T): void;
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
