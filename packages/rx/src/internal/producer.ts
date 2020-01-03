import {
  SchedulerContinuationResultLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

interface ProducerLike<T> {
  readonly subscriber: SubscriberLike<T>;

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void;
}

/** @ignore */
export const producerMixin: SchedulerContinuationLike = {
  run: function run<T>(this: ProducerLike<T>, shouldYield?: () => boolean) {
    try {
      const result = this.loop(shouldYield);

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      const error = { cause };
      this.subscriber.complete(error);
    }
    return;
  },
};
