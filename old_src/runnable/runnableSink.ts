import { getDelegate } from "../__internal__.delegating";
import { __DEV__ } from "../__internal__.env";
import { Disposable, isDisposed } from "../disposable";
import { newInstance, pipe, raise } from "../functions";
import { ReactiveSinkLike, notify } from "../reactiveSink";

export class RunnableSink<T> extends Disposable implements ReactiveSinkLike<T> {
  notify(_: T): void {}
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

export const decorateNotifyWithAssertions = (
  SinkClass: new (...any: readonly any[]) => ReactiveSinkLike<unknown>,
) => {
  if (__DEV__) {
    const notify = SinkClass.prototype.notify;

    SinkClass.prototype.notify = function notifyWithAssertion<T>(
      this: ReactiveSinkLike<T>,
      next: T,
    ) {
      if (isDisposed(this)) {
        raise("Sink is disposed");
      }
      notify.call(this, next);
    };
  }
};
