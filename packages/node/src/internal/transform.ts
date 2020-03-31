import { Transform, Writable } from "stream";
import {
  AbstractDelegatingSubscriber,
  SubscriberLike,
  ObservableOperatorLike,
  lift,
  toSafeSubscriber,
} from "@reactive-js/observable";

export const enum TransformBackPressureStrategy {
  Queue = 1,
  Drop = 2,
  Throw = 3,
}

class WritableSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
  private waitForDrain = false;

  constructor(
    delegate: SubscriberLike<TB>,
    private readonly writable: Writable,
    private readonly backPressureStrategy: TransformBackPressureStrategy,
  ) {
    super(delegate);

    const onDrain = () => {
      this.waitForDrain = false;
    };
    writable.on("drain", onDrain);

    this.add(err => {
      writable.removeListener("drain", onDrain);

      if (err !== undefined) {
        delegate.dispose(err);
      } else {
        writable.end();
      }
    });
  }

  notify(next: TA) {
    const backPressureStrategy = this.backPressureStrategy;
    const waitForDrain = this.waitForDrain;
    if (
      backPressureStrategy === TransformBackPressureStrategy.Throw &&
      waitForDrain
    ) {
      const cause = new Error("Back pressure requested");
      this.dispose({ cause });
    }

    if (
      backPressureStrategy === TransformBackPressureStrategy.Queue ||
      (backPressureStrategy === TransformBackPressureStrategy.Drop &&
        !waitForDrain)
    ) {
      this.waitForDrain = !this.writable.write(next);
    }
  }
}

export const transform = <Buffer>(
  factory: () => Transform,
  backPressureStrategy = TransformBackPressureStrategy.Queue,
): ObservableOperatorLike<Buffer, Buffer> => {
  const operator = (subscriber: SubscriberLike<Buffer>) => {
    const duplex = factory();
    const safeSubscriber = toSafeSubscriber(subscriber);

    const onData = (chunk: any) => {
      safeSubscriber.dispatch(chunk);
    };
    duplex.on("data", onData);

    const onEnd = () => {
      safeSubscriber.dispose();
    };
    duplex.on("end", onEnd);

    const onError = (cause: any) => {
      safeSubscriber.dispose({ cause });
    };
    duplex.on("error", onError);

    safeSubscriber.add(() => {
      duplex.pause();
      duplex.removeListener("data", onData);
      duplex.removeListener("end", onEnd);
      duplex.removeListener("error", onError);
      duplex.destroy();
    });

    duplex.resume();

    return new WritableSubscriber(safeSubscriber, duplex, backPressureStrategy);
  };
  return lift(operator, true);
};
