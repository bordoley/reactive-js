import {
  disposed,
  disposeOnError,
  dispose,
  add,
  addDisposableOrTeardown,
} from "../../disposable";
import { pipe, Function } from "../../functions";
import { isNone, none } from "../../option";
import { fromValue } from "./fromValue";
import {
  ObservableLike,
  ObservableFunction,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { never } from "./never";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class BufferSubscriber<T> extends AbstractDelegatingSubscriber<
  T,
  readonly T[]
> {
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
    delegate: SubscriberLike<readonly T[]>,
    private readonly durationFunction: Function<T, ObservableLike<unknown>>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);

    add(this, this.durationSubscription, error => {
      const buffer = this.buffer;
      this.buffer = [];
      if (isNone(error) && buffer.length > 0) {
        fromValue()(buffer).subscribe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

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
    duration?: Function<T, ObservableLike<unknown>> | number;
    maxBufferSize?: number;
  } = {},
): ObservableFunction<T, readonly T[]> {
  const delay = options.duration ?? Number.MAX_SAFE_INTEGER;
  const durationFunction =
    delay === Number.MAX_SAFE_INTEGER
      ? never
      : typeof delay === "number"
      ? (_: T) => fromValue({ delay })(none)
      : delay;

  const maxBufferSize = options.maxBufferSize ?? Number.MAX_SAFE_INTEGER;
  const operator = (subscriber: SubscriberLike<readonly T[]>) =>
    new BufferSubscriber(subscriber, durationFunction, maxBufferSize);
  operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;

  return lift(operator);
}
