import {
  SubscriberLike,
  DelegatingSubscriber,
  ObservableLike,
  subscribe,
  ErrorLike,
} from "@reactive-js/rx";
import { lift } from "./lift";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { createSerialDisposable } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { onComplete } from "./observe";
import { empty } from "./fromArray";

class BufferSubscriber<T> extends DelegatingSubscriber<T, readonly T[]> {
  private readonly durationSubscription = createSerialDisposable();
  private buffer: Array<T> = [];

  constructor(
    delegate: SubscriberLike<readonly T[]>,
    private readonly durationSelector: (next: T) => ObservableLike<unknown>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);

    this.add(this.durationSubscription).add(() => {
      this.buffer.length = 0;
    });
  }

  private notifyNext() {
    this.durationSubscription.disposable.dispose();
    const buffer = this.buffer;
    this.buffer = [];

    try {
      this.delegate.next(buffer);
    } catch (cause) {
      this.delegate.complete({ cause });
    }
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed && error === undefined) {
      this.notifyNext();
    }
    this.delegate.complete(error);
  }

  next(data: T) {
    const buffer = this.buffer;
    const durationSubscription = this.durationSubscription;

    buffer.push(data);

    if (buffer.length === this.maxBufferSize) {
      this.notifyNext();
    } else if (durationSubscription.disposable.isDisposed) {
      durationSubscription.disposable = pipe(
        this.durationSelector(data),
        onComplete(this.notifyNext),
        subscribe(this),
      );
    }
  }
}

const operator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
  maxBufferSize: number,
): SubscriberOperatorLike<T, readonly T[]> => subscriber =>
  new BufferSubscriber(subscriber, durationSelector, maxBufferSize);

export const buffer = <T>(
  duration: ((next: T) => ObservableLike<unknown>) | number,
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableOperatorLike<T, readonly T[]> =>
  lift(
    operator(
      typeof duration === "number" ? _ => empty(duration) : duration,
      maxBufferSize,
    ),
  );
