import { AbstractDisposable, addDisposable } from "../disposable";
import { __DEV__ } from "../env";
import { SideEffect1, raise } from "../functions";
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

class DelegatingSink<T> extends AbstractSink<T> {
  constructor(readonly delegate: SinkLike<T>) {
    super();
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingSink = <T>(delegate: SinkLike<T>): SinkLike<T> => {
  const sink = new DelegatingSink(delegate);
  addDisposable(delegate, sink);
  return sink;
};

export const sink =
  <T>(observer: SinkLike<T>): SideEffect1<RunnableLike<T>> =>
  observable =>
    observable.run(observer);
