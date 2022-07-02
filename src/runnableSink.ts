import { __DEV__ } from "./__internal__.env";
import { AbstractDisposableContainer } from "./container";
import { isDisposed } from "./disposable";
import { newInstance, pipe, raise } from "./functions";
import { getDelegate } from "./liftable";
import { SinkLike, notify } from "./source";

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

export class AbstractDelegatingRunnableSink<
  TIn,
  TOut,
> extends RunnableSink<TIn> {
  constructor(readonly delegate: RunnableSink<TOut>) {
    super();
  }

  notify(_: TIn) {}
}

class DelegatingRunnableSink<T> extends AbstractDelegatingRunnableSink<T, T> {
  notify(next: T) {
    pipe(this, getDelegate, notify(next));
  }
}

export const createDelegatingRunnableSink = <T>(
  delegate: RunnableSink<T>,
): RunnableSink<T> => newInstance(DelegatingRunnableSink, delegate);
