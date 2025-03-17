import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import { Function1, pipe } from "../functions.js";
import {
  ConsumerLike,
  DisposableLike,
  ObserverLike,
  SchedulerLike,
} from "../utils.js";
import * as Disposable from "./Disposable.js";
import DelegatingConsumerMixin from "./__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "./__mixins__/DelegatingSchedulerMixin.js";

export interface ConsumerModule {
  toObserver<T>(
    scheduler: SchedulerLike,
  ): Function1<ConsumerLike<T>, ObserverLike<T>>;
}

export type Signature = ConsumerModule;

export const toObserver: Signature["toObserver"] = /*@__PURE__*/ (<T>() => {
  const createSinkObserver = mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingSchedulerMixin),
    function SubscribeObserver(
      this: Omit<ObserverLike<T>, keyof DisposableLike | keyof SchedulerLike>,
      consumer: ConsumerLike<T>,
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, consumer);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(DelegatingConsumerMixin(), this, consumer);

      return this;
    },
  );

  return (scheduler: SchedulerLike) => (consumer: ConsumerLike<T>) =>
    pipe(
      createSinkObserver(consumer, scheduler),
      Disposable.addToContainer(scheduler),
    );
})();
