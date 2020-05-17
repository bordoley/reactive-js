import {
  disposed,
  disposeOnError,
  dispose,
  add,
  addDisposableOrTeardown,
} from "../../disposable";
import { pipe, Function1 } from "../../functions";
import { isNone, none } from "../../option";
import { fromValue } from "./fromValue";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { never } from "./never";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

class BufferObserver<T> extends AbstractDelegatingObserver<T, readonly T[]> {
  private durationSubscription = disposed;
  private buffer: Array<T> = [];
  private readonly onNotify = () => {
    dispose(this.durationSubscription);
    this.durationSubscription = disposed;

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

    add(this, this.durationSubscription, error => {
      const buffer = this.buffer;
      this.buffer = [];
      if (isNone(error) && buffer.length > 0) {
        fromValue()(buffer).observe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertObserverState(this);

    const buffer = this.buffer;

    buffer.push(next);

    if (buffer.length === this.maxBufferSize) {
      this.onNotify();
    } else if (this.durationSubscription.isDisposed) {
      this.durationSubscription = pipe(
        this.durationFunction(next),
        onNotify(this.onNotify),
        subscribe(this.delegate),
        addDisposableOrTeardown(disposeOnError(this)),
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
