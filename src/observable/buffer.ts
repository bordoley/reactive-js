import {
  Error,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  createSerialDisposable,
  dispose,
  disposed,
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
import { AbstractDelegatingObserver, observe } from "./observer";
import { subscribe } from "./subscribe";
import { fromValue } from "../container";

function onDispose(this: BufferObserver<void>, error: Option<Error>) {
  const buffer = this.buffer;
  this.buffer = [];

  if (isSome(error) || buffer.length === 0) {
    pipe(this.delegate, dispose(error));
  } else {
    pipe(buffer, fromValue(fromArrayT), observe(this.delegate));
  }
}

function onNotify(this: BufferObserver<any>) {
  this.durationSubscription.inner = disposed;

  const buffer = this.buffer;
  this.buffer = [];

  this.delegate.notify(buffer);
}

class BufferObserver<T> extends AbstractDelegatingObserver<T, readonly T[]> {
  readonly durationSubscription = createSerialDisposable();
  buffer: T[] = [];

  constructor(
    delegate: ObserverLike<readonly T[]>,
    private readonly durationFunction: Function1<T, ObservableLike<unknown>>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);

    addDisposableDisposeParentOnChildError(this, this.durationSubscription);
    addTeardown(this, onDispose);
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
  const operator = (observer: ObserverLike<readonly T[]>) =>
    new BufferObserver(observer, durationFunction, maxBufferSize);
  operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;

  return lift(operator);
}
