import { createSerialDisposable } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import { liftEnumerable, liftObservable } from "./lift";
import { never } from "./never";
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

  constructor(
    delegate: SubscriberLike<readonly T[]>,
    private readonly durationSelector: (next: T) => ObservableLike<unknown>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);

    this.add(this.durationSubscription);
    this.delegate.add(() => {
      this.buffer.length = 0;
    });
  }

  complete(error?: ErrorLike) {
    if (this.dispose()) {
      if (error === undefined) {
        this.notifyNext();
      }
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

export function buffer<T>(
  options: {
    duration?: ((next: T) => ObservableLike<unknown>) | number;
    maxBufferSize?: number;
  } = {},
): ObservableOperatorLike<T, readonly T[]> {
  const duration = options.duration || Number.MAX_SAFE_INTEGER;
  const maxBufferSize = options.maxBufferSize || Number.MAX_SAFE_INTEGER;

  return duration === Number.MAX_SAFE_INTEGER
    ? liftEnumerable(operator(never, maxBufferSize))
    : liftObservable(
        operator(
          typeof duration === "number" ? (_: T) => empty(duration) : duration,
          maxBufferSize,
        ),
      );
}
