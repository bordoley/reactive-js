import { createSerialDisposable, ErrorLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { ofValue } from "./ofValue";
import { lift } from "./lift";
import { never } from "./never";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

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
      if (error === undefined && buffer.length > 0) {
        ofValue(buffer).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    const buffer = this.buffer;
    const durationSubscription = this.durationSubscription;

    buffer.push(next);

    if (buffer.length === this.maxBufferSize) {
      this.onNotify();
    } else if (durationSubscription.inner.isDisposed) {
      durationSubscription.inner = pipe(
        this.durationSelector(next),
        observe(this),
        subscribe(this),
      );
    }
  }

  onNotify() {
    this.durationSubscription.inner.dispose();
    const buffer = this.buffer;
    this.buffer = [];

    try {
      this.delegate.notify(buffer);
    } catch (cause) {
      this.delegate.dispose({ cause });
    }

    if (this.isDisposed) {
      this.delegate.dispose();
    }
  }

  onDispose(error?: ErrorLike) {
    if (error !== undefined) {
      this.dispose(error);
    }

    // FIXME: should schedule onNotify if the duration subscription has been disposed as well.
  }
}

/**
 * Buffer items produced by the source until either the number of item reaches the
 * specified maximum buffer size or the duration time expires.
 *
 * @param options a configuration object that specifies an optional `duration` function or time in ms,
 * and an optional `maxBufferSize`.
 */
export function buffer<T>(
  options: {
    duration?: ((next: T) => ObservableLike<unknown>) | number;
    maxBufferSize?: number;
  } = {},
): ObservableOperatorLike<T, readonly T[]> {
  const duration = options.duration || Number.MAX_SAFE_INTEGER;
  const durationSelector =
    duration === Number.MAX_SAFE_INTEGER
      ? never
      : typeof duration === "number"
      ? (_: T) => ofValue(undefined, duration)
      : duration;

  const maxBufferSize = options.maxBufferSize || Number.MAX_SAFE_INTEGER;
  const call = (subscriber: SubscriberLike<readonly T[]>) =>
    new BufferSubscriber(subscriber, durationSelector, maxBufferSize);

  return lift(
    new SubscriberOperator(duration === Number.MAX_SAFE_INTEGER, call),
  );
}
