import { Mixin, mix, props, proto } from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  DeferredEventSourceLike,
  EventSourceLike_subscribe,
} from "../../computations.js";
import { pipe, returns } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as AsyncIterator from "../../utils/__internal__/AsyncIterator.js";
import * as Observer from "../../utils/__internal__/Observer.js";
import {
  ConsumerLike,
  SchedulerLike,
  ThrowBackpressureStrategy,
} from "../../utils.js";

type TReturn<T, TConsumer extends ConsumerLike<T>> = Pick<
  DeferredEventSourceLike<T, TConsumer>,
  typeof Symbol.asyncIterator | typeof ComputationLike_isDeferred
>;

const DeferredEventSourceBaseMixin: <
  T,
  TConsumer extends ConsumerLike<T>,
>() => Mixin<TReturn<T, TConsumer>> = /*@__PURE__*/ (<
  T,
  TConsumer extends ConsumerLike<T>,
>() => {
  return returns(
    mix(
      function DeferredEventSourceBaseMixin(
        this: TReturn<T, TConsumer>,
      ): TReturn<T, TConsumer> {
        return this;
      },
      props(),
      proto<TReturn<T, TConsumer>>({
        [ComputationLike_isDeferred]: true as const,

        [Symbol.asyncIterator](
          this: DeferredEventSourceLike<T, ConsumerLike<T>>,
          options?: { scheduler?: SchedulerLike },
        ) {
          const scheduler = options?.scheduler ?? DefaultScheduler.get();
          const observer = Observer.createWithFlowControl<T>(scheduler, {
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
          });

          this[EventSourceLike_subscribe](observer);

          return pipe(observer, AsyncIterator.fromAsyncEnumerator());
        },
      }),
    ),
  );
})();

export default DeferredEventSourceBaseMixin;
