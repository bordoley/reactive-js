import { Array_length } from "../../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ConsumerLike, SinkLike_complete } from "../../../utils.js";
import type * as Producer from "../../Producer.js";

const Producer_merge: Producer.Signature["merge"] = /*@__PURE__*/ (<T>() => {
  const MergeProducer_producers = Symbol("MergeProducer_producers");

  type TProperties<T> = {
    [ComputationLike_isPure]: boolean;
    [MergeProducer_producers]: readonly ProducerLike<T>[];
  };

  const isMergeProducer = <T>(
    producer: ProducerLike<T>,
  ): producer is ProducerLike<T> & TProperties<T> =>
    isSome((producer as any)[MergeProducer_producers]);

  const flattenProducers = <T>(
    producers: readonly ProducerLike<T>[],
  ): readonly ProducerLike<T>[] =>
    producers.some(isMergeProducer)
      ? producers.flatMap(producer =>
          isMergeProducer(producer)
            ? flattenProducers(producer[MergeProducer_producers])
            : producer,
        )
      : producers;

  const MergeProducerMixin: Mixin1<
    ProducerLike<T>,
    readonly ProducerLike<T>[]
  > = mix(
    function MergeProducer(
      this: TProperties<T> & ProducerLike<T>,
      producers: readonly ProducerLike<T>[],
    ): ProducerLike<T> {
      producers = flattenProducers(producers);

      this[ComputationLike_isPure] = Computation.areAllPure(producers);

      this[MergeProducer_producers] = producers;

      return this;
    },
    props<TProperties<T>>({
      [ComputationLike_isPure]: false,
      [MergeProducer_producers]: none,
    }),
    proto({
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [SourceLike_subscribe](
        this: TProperties<T>,
        consumer: ConsumerLike<T>,
      ): void {
        const producers = this[MergeProducer_producers];
        const count = producers[Array_length];
        let completed = 0;

        for (const producer of producers) {
          pipe(
            Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing(
              consumer,
            ),
            Disposable.addTo(consumer),
            DisposableContainer.onComplete(() => {
              completed++;
              if (completed >= count) {
                consumer[SinkLike_complete]();
              }
            }),
            bindMethod(producer, SourceLike_subscribe),
          );
        }
      },
    }),
  );

  const createMergeProducer = mixInstanceFactory(
    include(MergeProducerMixin),
    function DeferredMergeProducer(
      this: TProperties<T> & ProducerLike<T>,
      producers: readonly ProducerLike<T>[],
    ): ProducerLike<T> {
      init(MergeProducerMixin, this, producers);

      return this;
    },
  );

  return (...producers: readonly ProducerLike<T>[]) =>
    createMergeProducer(producers);
})() as Producer.Signature["merge"];

export default Producer_merge;
