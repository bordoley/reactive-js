import { createSerialDisposable, Exception } from "@reactive-js/disposable";
import { isNone, isSome, none } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import { ofValue } from "./ofValue";
import { lift } from "./lift";
import { never } from "./never";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class BufferSubscriber<T> extends AbstractDelegatingSubscriber<T, readonly T[]>
  implements ObserverLike<unknown> {
  private readonly durationSubscription = createSerialDisposable();
  private buffer: Array<T> = [];

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
        ofValue(buffer).subscribe(delegate);
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
        observe(this),
        subscribe(this.delegate),
      );
    }
  }

  onNotify() {
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
  }

  onDispose(error?: Exception) {
    if (isSome(error)) {
      this.dispose(error);
    }

    // FIXME: should schedule onNotify if the duration subscription has been disposed as well.
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
  const duration = options.duration || Number.MAX_SAFE_INTEGER;
  const durationSelector =
    duration === Number.MAX_SAFE_INTEGER
      ? never
      : typeof duration === "number"
      ? (_: T) => ofValue(none, duration)
      : duration;

  const maxBufferSize = options.maxBufferSize || Number.MAX_SAFE_INTEGER;
  const operator = (subscriber: SubscriberLike<readonly T[]>) =>
    new BufferSubscriber(subscriber, durationSelector, maxBufferSize);

  return lift(operator, duration === Number.MAX_SAFE_INTEGER);
}
