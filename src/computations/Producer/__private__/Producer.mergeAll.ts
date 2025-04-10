import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike,
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import { Optional } from "../../../functions.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  OverflowBackpressureStrategy,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import MergeAllConsumerMixin from "../../__mixins__/MergeAllConsumerMixin.js";

export const createMergeAllConsumer: <
  TInnerSource extends EventSourceLike<T, ConsumerLike<T>>,
  T,
>(
  delegate: ConsumerLike<T>,
  options: Optional<{
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
    concurrency?: number;
  }>,
) => ConsumerLike<TInnerSource> =
  /*@__PURE__*/
  (<TInnerSource extends EventSourceLike<T, ConsumerLike<T>>, T>() =>
    mixInstanceFactory(
      include(MergeAllConsumerMixin()),
      function MergeAllConsumer(
        this: unknown,
        delegate: ConsumerLike<T>,
        options: Optional<{
          backpressureStrategy?: BackpressureStrategy;
          capacity?: number;
          concurrency?: number;
        }>,
      ): ConsumerLike<TInnerSource> {
        init(
          MergeAllConsumerMixin<TInnerSource, ConsumerLike<T>, T>(),
          this,
          delegate,
          options,
          Consumer.createDelegatingNonCompleting,
        );

        return this;
      },
    ))();

export const Producer_mergeAll: Producer.Signature["mergeAll"] = (<
    T,
    TInnerLike,
  >(
    options?: TInnerLike &
      Optional<{
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
        concurrency?: number;
      }>,
  ) =>
  (obs: ProducerLike<ProducerLike<T>>) =>
    DeferredEventSource.create(
      (observer: ConsumerLike<T>) => {
        const delegate = createMergeAllConsumer(observer, options);
        obs[EventSourceLike_subscribe](delegate);
      },
      {
        [ComputationLike_isPure]:
          Computation.isPure(obs) && Computation.isPure(options ?? {}),
        [ComputationLike_isSynchronous]:
          Computation.isSynchronous(obs) &&
          Computation.isSynchronous(options ?? {}),
      },
    )) as Producer.Signature["mergeAll"];

export const Producer_concatAll: Producer.Signature["concatAll"] = (options =>
  Producer_mergeAll({
    ...options,
    concurrency: 1,
    capacity: MAX_SAFE_INTEGER,
    backpressureStrategy: OverflowBackpressureStrategy,
  })) as Producer.Signature["concatAll"];
