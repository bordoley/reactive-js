import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

interface ProducerLike<T> extends SchedulerContinuationLike {
  readonly subscriber: SubscriberLike<T>;

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void;
}

/** @ignore */
export const producerMixin = {
  run: function run<T>(this: ProducerLike<T>, shouldYield?: () => boolean) {
    try {
      const result = this.produce(shouldYield);

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      const error = { cause };
      this.subscriber.dispose(error);
    }
    return;
  },
};
