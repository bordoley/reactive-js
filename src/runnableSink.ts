import { DisposableContainer } from "./container";
import { isDisposed } from "./disposable";
import { __DEV__ } from "./env";
import { newInstance, raise } from "./functions";
import { delegate } from "./liftable";
import { SinkLike } from "./source";

export class RunnableSink<T>
  extends DisposableContainer
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
    delegate(this).notify(next);
  }
}

export const createDelegatingRunnableSink = <T>(
  delegate: RunnableSink<T>,
): RunnableSink<T> => newInstance(DelegatingRunnableSink, delegate);
