import { disposed, disposeOnError, dispose } from "../../disposable.ts";
import { pipe } from "../../functions.ts";
import { isNone, none } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { never } from "./never.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

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
        this.durationSelector(next),
        onNotify(this.onNotify),
        subscribe(this.delegate),
      ).add(disposeOnError(this));
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
