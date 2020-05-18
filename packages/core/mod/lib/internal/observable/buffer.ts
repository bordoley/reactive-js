import {
  createSerialDisposable,
  disposed,
  dispose,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../../disposable.ts";
import { pipe, Function1 } from "../../functions.ts";
import { none } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { never } from "./never.ts";
import { observeWith } from "./observable.ts";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

class BufferObserver<T> extends AbstractDelegatingObserver<T, readonly T[]> {
  private readonly durationSubscription = createSerialDisposable();
  private buffer: Array<T> = [];
  private readonly onNotify = () => {
    this.durationSubscription.inner = disposed;

    const buffer = this.buffer;
    this.buffer = [];

    this.delegate.notify(buffer);
  };

  constructor(
    delegate: ObserverLike<readonly T[]>,
    private readonly durationFunction: Function1<T, ObservableLike<unknown>>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);

    addDisposableDisposeParentOnChildError(this, this.durationSubscription);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      const buffer = this.buffer;
      this.buffer = [];

      if (buffer.length > 0) {
        pipe(buffer, fromValue(), observeWith(delegate));
      } else {
        dispose(delegate);
      }
    });
  }

  notify(next: T) {
    assertObserverState(this);

    const buffer = this.buffer;

    buffer.push(next);

    if (buffer.length === this.maxBufferSize) {
      this.onNotify();
    } else if (this.durationSubscription.inner.isDisposed) {
      this.durationSubscription.inner = pipe(
        this.durationFunction(next),
        onNotify(this.onNotify),
        subscribe(this.delegate),
      );
    }
  }
}

/**
 * Returns an `ObservableLike` which buffers items produced by the source until either the
 * number of items reaches the specified maximum buffer size or the duration time expires.
 *
 * @param options A configuration object that specifies an optional `duration` function or time in ms,
 * and an optional `maxBufferSize`.
 */
export function buffer<T>(
  options: {
    duration?: Function1<T, ObservableLike<unknown>> | number;
    maxBufferSize?: number;
  } = {},
): ObservableOperator<T, readonly T[]> {
  const delay = options.duration ?? Number.MAX_SAFE_INTEGER;
  const durationFunction =
    delay === Number.MAX_SAFE_INTEGER
      ? never
      : typeof delay === "number"
      ? (_: T) => fromValue({ delay })(none)
      : delay;

  const maxBufferSize = options.maxBufferSize ?? Number.MAX_SAFE_INTEGER;
  const operator = (observer: ObserverLike<readonly T[]>) =>
    new BufferObserver(observer, durationFunction, maxBufferSize);
  operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;

  return lift(operator);
}
