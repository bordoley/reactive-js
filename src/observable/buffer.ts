import { fromValue } from "../container";
import {
  Error,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  createSerialDisposable,
  dispose,
  disposed,
  addDisposable,
  SerialDisposableLike,
} from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { Option, isSome, none } from "../option";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { never } from "./never";
import { AbstractDelegatingObserver, sink } from "./observer";
import { subscribe } from "./subscribe";

function onDispose(this: BufferObserver<void>, error: Option<Error>) {
  const buffer = this.buffer;
  this.buffer = [];

  if (isSome(error) || buffer.length === 0) {
    pipe(this.delegate, dispose(error));
  } else {
    pipe(buffer, fromValue(fromArrayT), sink(this.delegate));
  }
}

function onNotify(this: BufferObserver<any>) {
  this.durationSubscription.inner = disposed;

  const buffer = this.buffer;
  this.buffer = [];

  this.delegate.notify(buffer);
}

class BufferObserver<T> extends AbstractDelegatingObserver<T, readonly T[]> {
  buffer: T[] = [];

  constructor(
    delegate: ObserverLike<readonly T[]>,
    private readonly durationFunction: Function1<T, ObservableLike<unknown>>,
    private readonly maxBufferSize: number,
    readonly durationSubscription: SerialDisposableLike,
  ) {
    super(delegate);
  }

  notify(next: T) {
    this.assertState();

    const buffer = this.buffer;

    buffer.push(next);

    if (buffer.length === this.maxBufferSize) {
      onNotify.call(this);
    } else if (this.durationSubscription.inner.isDisposed) {
      this.durationSubscription.inner = pipe(
        next,
        this.durationFunction,
        subscribe(this.delegate, onNotify, this),
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
    readonly duration?: Function1<T, ObservableLike<unknown>> | number;
    readonly maxBufferSize?: number;
  } = {},
): ObservableOperator<T, readonly T[]> {
  const delay = options.duration ?? Number.MAX_SAFE_INTEGER;
  const durationFunction =
    delay === Number.MAX_SAFE_INTEGER
      ? never
      : typeof delay === "number"
      ? (_: T) => fromValue(fromArrayT, { delay })(none)
      : delay;

  const maxBufferSize = options.maxBufferSize ?? Number.MAX_SAFE_INTEGER;
  const operator = (delegate: ObserverLike<readonly T[]>) => {
    const durationSubscription = createSerialDisposable();
    const observer = new BufferObserver(
      delegate,
      durationFunction,
      maxBufferSize,
      durationSubscription,
    );
    addDisposable(delegate, observer);
    addDisposableDisposeParentOnChildError(observer, durationSubscription);
    addTeardown(observer, onDispose);
    return observer;
  };
  operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;

  return lift(operator);
}
