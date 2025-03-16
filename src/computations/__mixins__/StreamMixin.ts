import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { Mixin3, include, init, mix } from "../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  PureDeferredObservableLike,
  StreamLike,
} from "../../computations.js";
import { Function1, Optional, pipe, returns } from "../../functions.js";
import { clampPositiveInteger } from "../../math.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingConsumerMixin from "../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as ConsumerObservable from "../__internal__/ConsumerObservable.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";

const StreamMixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T> & DisposableLike,
  Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>,
  SchedulerLike,
  Optional<{
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
        DelegatingMulticastObservableMixin<T>(),
      ),
      function Stream(
        this: unknown,
        op: Function1<
          PureDeferredObservableLike<TReq>,
          DeferredObservableLike<T>
        >,
        scheduler: SchedulerLike,
        options?: {
          replay?: number;
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        },
      ): StreamLike<TReq, T> & DisposableLike {
        const consumer = ConsumerObservable.create<TReq>(options);

        const delegate = pipe(
          consumer,
          Observable.backpressureStrategy({
            backpressureStrategy:
              options?.backpressureStrategy ?? OverflowBackpressureStrategy,
            capacity: clampPositiveInteger(
              options?.capacity ?? MAX_SAFE_INTEGER,
            ),
          }),
          op,
          Observable.multicast<T>(scheduler, options),
          Disposable.addTo(consumer),
        );

        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingConsumerMixin<TReq>(), this, consumer);
        init(DelegatingMulticastObservableMixin<T>(), this, delegate);

        return this;
      },
    ),
  ))();

export default StreamMixin;
