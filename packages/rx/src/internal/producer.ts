import { SchedulerContinuationResultLike } from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

interface ProducerLike<T> {
  readonly subscriber: SubscriberLike<T> | undefined;

  loop(shouldYield: () => boolean): SchedulerContinuationResultLike | void;
  loopFast(): void;
}

export function runMixin<T>(
  this: ProducerLike<T>,
  shouldYield?: () => boolean,
) {
  let error = undefined;
  try {
    let result: SchedulerContinuationResultLike | void;
    if (shouldYield !== undefined) {
      result = this.loop(shouldYield);
    } else {
      result = this.loopFast();
    }

    if (result !== undefined) {
      return result;
    }
  } catch (cause) {
    error = { cause };
  }

  (this.subscriber as SubscriberLike<T>).complete(error);
  return;
}
