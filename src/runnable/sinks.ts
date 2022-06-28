import { AbstractDisposableContainer } from "../container";
import { isDisposed } from "../disposable";
import { __DEV__ } from "../env";
import { raise } from "../functions";
import { SinkLike } from "../source";

export class Sink<T>
  extends AbstractDisposableContainer
  implements SinkLike<T>
{
  assertState(this: Sink<T>): void {}

  notify(_: T): void {}
}
if (__DEV__) {
  Sink.prototype.assertState = function <T>(this: Sink<T>) {
    if (isDisposed(this)) {
      raise("Sink is disposed");
    }
  };
}

class DelegatingSink<T> extends Sink<T> {
  constructor(readonly delegate: Sink<T>) {
    super();
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingSink = <T>(delegate: Sink<T>): Sink<T> =>
  new DelegatingSink(delegate);
