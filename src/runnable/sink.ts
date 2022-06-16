import {
  AbstractDisposable,
  addDisposable,
  bindDisposables,
} from "../disposable";
import { __DEV__ } from "../env";
import { ignore, raise } from "../functions";
import { SinkLike } from "../sink";

const assertStateProduction = ignore;
const assertStateDev = function <T>(this: SinkLike<T>) {
  if (this.isDisposed) {
    raise("Sink is disposed");
  }
};

const assertState = __DEV__ ? assertStateDev : assertStateProduction;

export abstract class AbstractSink<T>
  extends AbstractDisposable
  implements SinkLike<T>
{
  assertState = assertState;

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
