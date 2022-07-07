import { getDelegate } from "../__internal__.delegating";
import { __DEV__ } from "../__internal__.env";
import { Disposable, isDisposed } from "../disposable";
import { newInstance, pipe, raise } from "../functions";
import { ReactiveSinkLike, notify } from "../reactiveSink";

export class RunnableSink<T> extends Disposable implements ReactiveSinkLike<T> {
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
  constructor(readonly delegate: ReactiveSinkLike<TOut>) {
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
  delegate: ReactiveSinkLike<T>,
): RunnableSink<T> => newInstance(DelegatingRunnableSink, delegate);
