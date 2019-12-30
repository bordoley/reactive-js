import { createSerialDisposable } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import { lift } from "./lift";
import {
  ErrorLike,
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { DelegatingSubscriber } from "./subscriber";

class BufferSubscriber<T> extends DelegatingSubscriber<T, readonly T[]>
  implements ObserverLike<unknown> {
  private readonly durationSubscription = createSerialDisposable();
  private buffer: Array<T> = [];

  isDisposed = false;

  constructor(
    delegate: SubscriberLike<readonly T[]>,
    private readonly durationSelector: (next: T) => ObservableLike<unknown>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);

    this.add(this.durationSubscription).add(() => {
      this.isDisposed = true;
      this.buffer.length = 0;
    });
  }

  private notifyNext() {
    this.durationSubscription.inner.dispose();
    const buffer = this.buffer;
    this.buffer = [];

    try {
      this.delegate.next(buffer);
    } catch (cause) {
      this.delegate.complete({ cause });
    }
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.isDisposed = true;
      
      if (error === undefined) {
        this.notifyNext();
      }

      this.dispose();
      this.delegate.complete(error);
    }
  }

  next(data: T) {
    const buffer = this.buffer;
    const durationSubscription = this.durationSubscription;

    buffer.push(data);

    if (buffer.length === this.maxBufferSize) {
      this.notifyNext();
    } else if (durationSubscription.inner.isDisposed) {
      durationSubscription.inner = pipe(
        this.durationSelector(data),
        observe(this),
        subscribe(this),
      );
    }
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.complete(error);
    } else {
      this.notifyNext();
    }
  }

  onNext(_: unknown) {}
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
