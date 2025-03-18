import { Mixin2, include, init, mix } from "../../__internal__/mixins.js";
import {
  ProducerLike,
  PureProducerLike,
  StreamLike,
} from "../../computations.js";
import { Function1, Optional, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingConsumerMixin from "../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { BackpressureStrategy, DisposableLike } from "../../utils.js";
import * as Producer from "../Producer.js";
import * as ConsumerProducer from "../__internal__/ConsumerProducer.js";
import DelegatingBroadcasterMixin from "./DelegatingBroadcasterMixin.js";

const StreamMixin: <TReq, T>() => Mixin2<
  StreamLike<TReq, T> & DisposableLike,
  Function1<PureProducerLike<TReq>, ProducerLike<T>>,
  Optional<{
    autoDispose?:boolean;
    replay?: number;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>
> = /*@__PURE__*/ (<TReq, T>() =>
  returns(
    mix(
      include(
        DelegatingDisposableMixin,
        DelegatingConsumerMixin(),
        DelegatingBroadcasterMixin<T>(),
      ),
      function Stream(
        this: unknown,
        op: Function1<PureProducerLike<TReq>, ProducerLike<T>>,
        options?: {
          autoDispose?: boolean;
          replay?: number;
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        },
      ): StreamLike<TReq, T> & DisposableLike {
        const consumer = ConsumerProducer.create<TReq>(options);

        const delegate = pipe(
          consumer,/*
          Observable.backpressureStrategy({
            backpressureStrategy:
              options?.backpressureStrategy ?? OverflowBackpressureStrategy,
            capacity: clampPositiveInteger(
              options?.capacity ?? MAX_SAFE_INTEGER,
            ),
          }),*/

          // FIXME: Backpressure 
          op,
          Producer.broadcast(options),
          Disposable.addTo(consumer),
        );

        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingConsumerMixin<TReq>(), this, consumer);
        init(DelegatingBroadcasterMixin<T>(), this, delegate);

        return this;
      },
    ),
  ))();

export default StreamMixin;
