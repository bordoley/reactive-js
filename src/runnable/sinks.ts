import { AbstractDisposable, addDisposable } from "../disposable";
import { __DEV__ } from "../env";
import { SideEffect1, raise } from "../functions";
import { RunnableLike } from "../runnable";
import { SinkLike, Sink as SinkM } from "../source";

export class Sink<T> extends AbstractDisposable implements SinkLike<T> {
  get type(): this {
    return this;
  }
  get T(): unknown {
    return undefined;
  }

  assertState(this: Sink<T>): void {}

  notify(_: T): void {}
}
if (__DEV__) {
  Sink.prototype.assertState = function <T>(this: Sink<T>) {
    if (this.isDisposed) {
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

export const createDelegatingSink = <T>(delegate: Sink<T>): Sink<T> => {
  const sink = new DelegatingSink(delegate);
  addDisposable(delegate, sink);
  return sink;
};

export const sink =
  <T>(sink: Sink<T>): SideEffect1<RunnableLike<T>> =>
  observable =>
    observable.run(sink);

export const sinkT: SinkM<RunnableLike<unknown>> = {
  sink,
};
