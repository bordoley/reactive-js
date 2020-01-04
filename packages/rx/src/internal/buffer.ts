import { createSerialDisposable, ErrorLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { ofValue } from "./ofValue";
import { liftEnumerable, liftObservable } from "./lift";
import { never } from "./never";
import {
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

  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.disposable.dispose(error);

      const buffer = this.buffer;
      if (error === undefined && buffer.length > 0) {
        const buffer = this.buffer;
        this.buffer = [];
        ofValue(buffer).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }      
    }
  }

  notifyNext(data: T) {
    const buffer = this.buffer;
    const durationSubscription = this.durationSubscription;

    buffer.push(data);

    if (buffer.length === this.maxBufferSize) {
      this.doNotifyNext();
    } else if (durationSubscription.inner.isDisposed) {
      durationSubscription.inner = pipe(
        this.durationSelector(data),
        observe(this),
        subscribe(this),
      );
    }
  }

  doNotifyNext() {
    this.durationSubscription.inner.dispose();
    const buffer = this.buffer;
    this.buffer = [];

    try {
      this.delegate.notifyNext(buffer);
    } catch (cause) {
      this.delegate.dispose({ cause });
    }

    if(this.isDisposed) {
      this.delegate.dispose();
    }
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.dispose(error);
    }
  }

  onNext(_: unknown) {
    this.doNotifyNext();
  }
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
          typeof duration === "number" ? (_: T) => ofValue(undefined, duration) : duration,
          maxBufferSize,
        ),
      );
}
