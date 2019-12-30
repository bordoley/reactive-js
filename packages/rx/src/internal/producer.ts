import {
  SchedulerContinuationResultLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

interface ProducerLike<T> {
  readonly subscriber: SubscriberLike<T> | undefined;

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void;
}

/** @ignore */
export const producerMixin: SchedulerContinuationLike = {
  run: function run<T>(this: ProducerLike<T>, shouldYield?: () => boolean) {
    let error = undefined;
    try {
      const result = this.loop(shouldYield);

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    (this.subscriber as SubscriberLike<T>).complete(error);
    return;
  },
};
