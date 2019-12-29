import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";
import {
  EnumerableLike,
  EnumeratorLike,
  AbstractEnumerator,
} from "./enumerable";
import { ObservableLike, SubscriberLike } from "./interfaces";

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

class GeneratorEnumerator<T> extends AbstractEnumerator<T> {
  private isStarted = false;
  isCompleted = false;
  hasNext = true;

  constructor(private readonly generator: (acc: T) => T, private acc: T) {
    super();
  }

  get current(): T {
    if (!this.isStarted) {
      throw new Error("no current value");
    }
    return this.acc;
  }

  moveNext(): boolean {
    if (this.isStarted) {
      this.acc = this.generator(this.acc);
    } else {
      this.isStarted = true;
    }
    return true;
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

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const generator = this.generator;
    const subscriber = this.subscriber;

    let acc = this.acc;
    while (!subscriber.isDisposed) {
      subscriber.next(acc);
      acc = generator(acc);

      if (shouldYield()) {
        this.acc = acc;
        return this.continuationResult;
      }
    }
    return;
  }

  private loopFast(): SchedulerContinuationResultLike | void {
    const generator = this.generator;
    const subscriber = this.subscriber;

    let acc = this.acc;
    do {
      subscriber.next(acc);
      acc = generator(acc);
    } while (!subscriber.isDisposed);
    this.acc = acc;

    return;
  }

  run(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    let error = undefined;
    try {
      const result =
        shouldYield !== undefined ? this.loop(shouldYield) : this.loopFast();

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    this.subscriber.complete(error);
    return;
  }
}

class GenerateObservable<T> implements ObservableLike<T>, EnumerableLike<T> {
  constructor(private readonly generator: (acc: T) => T, private acc: T) {}

  getEnumerator(): EnumeratorLike<T> {
    return new GeneratorEnumerator(this.generator, this.acc);
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
