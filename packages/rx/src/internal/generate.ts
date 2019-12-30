import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";
import {
  EnumerableLike,
  EnumeratorLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { producerMixin } from "./producer";
import { createDisposable, disposableMixin } from "@reactive-js/disposable";

class GenerateWithDelayObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay = 0,
  ) {}

  run(_?: () => boolean) {
    const subscriber = this.subscriber as SubscriberLike<T>;
    if (!subscriber.isDisposed) {
      try {
        let acc = this.acc;
        subscriber.next(acc);
        this.acc = this.generator(acc);
      } catch (cause) {
        subscriber.complete({ cause });
      }

      return this.continuationResult;
    }

    return;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

class GenerateProducer<T> implements SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly generator: (acc: T) => T,
    private acc: T,
  ) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const generator = this.generator;
    const subscriber = this.subscriber;

    let acc = this.acc;
    if (shouldYield !== undefined) {
      while (!subscriber.isDisposed) {
        subscriber.next(acc);
        acc = generator(acc);

        if (shouldYield()) {
          this.acc = acc;
          return this.continuationResult;
        }
      }
    } else {
      while (!subscriber.isDisposed) {
        subscriber.next(acc);
        acc = generator(acc);
      }
    }
    return;
  }

  run = producerMixin.run;
}

class GenerateEnumerator<T> implements EnumeratorLike<T> {
  readonly disposable = createDisposable();
  hasCurrent = false;

  constructor(private readonly generator: (acc: T) => T, public current: T) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  add = disposableMixin.add;

  dispose = disposableMixin.dispose;

  moveNext(): boolean {
    if (this.hasCurrent) {
      this.current = this.generator(this.current);
    } else {
      this.hasCurrent = true;
    }
    return true;
  }

  remove = disposableMixin.remove;
}

class GenerateObservable<T> implements ObservableLike<T>, EnumerableLike<T> {
  constructor(
    private readonly generator: (acc: T) => T,
    private readonly acc: T,
  ) {}

  getEnumerator(): EnumeratorLike<T> {
    return new GenerateEnumerator(this.generator, this.acc);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new GenerateProducer(subscriber, this.generator, this.acc);
    subscriber.schedule(producer);
  }
}

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> =>
  delay > 0
    ? defer(
        () => new GenerateWithDelayObservable(generator, initialValue(), delay),
      )
    : new GenerateObservable(generator, initialValue());
