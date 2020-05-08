import { createSerialDisposable } from "../../disposable";
import { pipe } from "../../functions";
import { isNone, isSome, none } from "../../option";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { never } from "./never";
import { fromValue } from "./fromValue";
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
  private readonly durationSubscription = createSerialDisposable();
  private buffer: Array<T> = [];

  readonly onNotify = () => {
    this.durationSubscription.inner.dispose();
    const buffer = this.buffer;
    this.buffer = [];

    const delegate = this.delegate;

    try {
      delegate.notify(buffer);
    } catch (cause) {
      delegate.dispose({ cause });
    }

    if (this.isDisposed) {
      delegate.dispose();
    }
  };

  constructor(
    delegate: SubscriberLike<readonly T[]>,
    private readonly durationSelector: (next: T) => ObservableLike<unknown>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);

    this.add(this.durationSubscription).add(error => {
      const buffer = this.buffer;
      this.buffer = [];
      if (isNone(error) && buffer.length > 0) {
        fromValue()(buffer).subscribe(delegate);
      } else {
        delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    const buffer = this.buffer;
    const durationSubscription = this.durationSubscription;

    buffer.push(next);

    if (buffer.length === this.maxBufferSize) {
      this.onNotify();
    } else if (durationSubscription.inner.isDisposed) {
      durationSubscription.inner = pipe(
        this.durationSelector(next),
        onNotify(this.onNotify),
        subscribe(this.delegate),
      ).add(e => {
        if (isSome(e)) {
          this.dispose(e);
        }
      });
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
    duration?: ((next: T) => ObservableLike<unknown>) | number;
    maxBufferSize?: number;
  } = {},
): ObservableOperator<T, readonly T[]> {
  const delay = options.duration ?? Number.MAX_SAFE_INTEGER;
  const durationSelector =
    delay === Number.MAX_SAFE_INTEGER
      ? never
      : typeof delay === "number"
      ? (_: T) => fromValue({ delay })(none)
      : delay;

  const maxBufferSize = options.maxBufferSize ?? Number.MAX_SAFE_INTEGER;
  const operator = (subscriber: SubscriberLike<readonly T[]>) =>
    new BufferSubscriber(subscriber, durationSelector, maxBufferSize);
  operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;

  return lift(operator);
}
