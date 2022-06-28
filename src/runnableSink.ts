import { AbstractDisposableContainer } from "./container";
import { isDisposed } from "./disposable";
import { __DEV__ } from "./env";
import { raise } from "./functions";
import { SinkLike } from "./source";

export class RunnableSink<T>
  extends AbstractDisposableContainer
  implements SinkLike<T>
{
  assertState(this: this): void {}

  notify(_: T): void {}
}
if (__DEV__) {
  RunnableSink.prototype.assertState = function <T>(this: RunnableSink<T>) {
    if (isDisposed(this)) {
      raise("RunnableSink is disposed");
    }
  };
}

class DelegatingRunnableSink<T> extends RunnableSink<T> {
  constructor(readonly delegate: RunnableSink<T>) {
    super();
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingRunnableSink = <T>(
  delegate: RunnableSink<T>,
): RunnableSink<T> => new DelegatingRunnableSink(delegate);
