import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { bind, bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ConsumerLike, SinkLike_complete } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import Producer_empty from "./Producer.empty.js";

const Producer_concat: Producer.Signature["concat"] = /*@__PURE__*/ (<T>() => {
  const ConcatConsumerCtx_delegate = Symbol("ConcatConsumerCtx_delegate");
  const ConcatConsumerCtx_producers = Symbol("ConcatConsumerCtx_producers");
  const ConcatConsumerCtx_nextIndex = Symbol("ConcatConsumerCtx_nextIndex");

  type ConcatConsumerCtx = {
    readonly [ConcatConsumerCtx_delegate]: ConsumerLike<T>;
    readonly [ConcatConsumerCtx_producers]: readonly ProducerLike<T>[];
    [ConcatConsumerCtx_nextIndex]: number;
  };

  function onConcatConsumerComplete(this: ConcatConsumerCtx) {
    const delegate = this[ConcatConsumerCtx_delegate];
    const producers = this[ConcatConsumerCtx_producers];
    const next = this[ConcatConsumerCtx_nextIndex];
    if (next < producers[Array_length]) {
      this[ConcatConsumerCtx_nextIndex]++;
      const concatConsumer = createConcatConsumer(this);
      producers[next][SourceLike_subscribe](concatConsumer);
    } else {
      delegate[SinkLike_complete]();
    }
  }

  const createConcatConsumer = (ctx: ConcatConsumerCtx) => {
    const delegate = ctx[ConcatConsumerCtx_delegate];
    return pipe(
      Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing(delegate),
      Disposable.addTo(delegate),
      DisposableContainer.onComplete(bind(onConcatConsumerComplete, ctx)),
    );
  };

  const ConcatProducer_producers = Symbol("ConcatProducer_producers");

  type TProperties<T> = {
    [ComputationLike_isPure]: boolean;
    [ConcatProducer_producers]: readonly ProducerLike<T>[];
  };

  const isConcatProducer = <T>(
    producer: ProducerLike<T>,
  ): producer is ProducerLike<T> & TProperties<T> =>
    isSome((producer as any)[ConcatProducer_producers]);

  const flattenProducers = <T>(
    producers: readonly ProducerLike<T>[],
  ): readonly ProducerLike<T>[] =>
    producers.some(isConcatProducer)
      ? producers.flatMap(producer =>
          isConcatProducer(producer)
            ? flattenProducers(producer[ConcatProducer_producers])
            : producer,
        )
      : producers;

  const createConcatProducer = mixInstanceFactory(
    function ConcatProducer(
      this: TProperties<T> & ProducerLike<T>,
      producers: readonly ProducerLike<T>[],
    ): ProducerLike<T> {
      this[ComputationLike_isPure] = Computation.areAllPure(producers);
      this[ConcatProducer_producers] = flattenProducers(producers);

      return this;
    },
    props<TProperties<T>>({
      [ComputationLike_isPure]: false,
      [ConcatProducer_producers]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [SourceLike_subscribe](
        this: TProperties<T>,
        consumer: ConsumerLike<T>,
      ): void {
        const { [ConcatProducer_producers]: producers } = this;

        pipe(
          createConcatConsumer({
            [ConcatConsumerCtx_delegate]: consumer,
            [ConcatConsumerCtx_producers]: producers,
            [ConcatConsumerCtx_nextIndex]: 1,
          }),
          bindMethod(producers[0], SourceLike_subscribe),
        );
      },
    },
  );

  return (...producers: readonly ProducerLike<T>[]) => {
    const length = producers[Array_length];
    return length === 0
      ? Producer_empty()
      : length === 1
        ? producers[0]
        : createConcatProducer(producers);
  };
})() as Producer.Signature["concat"];

export default Producer_concat;
