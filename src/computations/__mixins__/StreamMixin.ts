import { Mixin3, include, init, mix } from "../../__internal__/mixins.js";
import {
  ObservableLike,
  PureObservableLike,
  StreamLike,
} from "../../computations.js";
import { Function1, Optional, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingConsumerMixin from "../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  SchedulerLike,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as ConsumerObservable from "../__internal__/ConsumerObservable.js";
import DelegatingBroadcasterMixin from "./DelegatingBroadcasterMixin.js";

const StreamMixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T> & DisposableLike,
  Function1<PureObservableLike<TReq>, ObservableLike<T>>,
  SchedulerLike,
  Optional<{
    autoDispose?: boolean;
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
        DelegatingPauseableMixin,
      ),
      function Stream(
        this: unknown,
        op: Function1<PureObservableLike<TReq>, ObservableLike<T>>,
        scheduler: SchedulerLike,
        options?: {
          autoDispose?: boolean;
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        },
      ): StreamLike<TReq, T> & DisposableLike {
        const consumer = ConsumerObservable.create<TReq>(options);

        const delegate = pipe(
          consumer,
          op,
          Observable.broadcast({
            scheduler,
            autoDispose: options?.autoDispose,
          }),
          Disposable.addTo(consumer),
        );

        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingConsumerMixin<TReq>(), this, consumer);
        init(DelegatingBroadcasterMixin<T>(), this, delegate);
        init(DelegatingPauseableMixin, this, delegate);

        return this;
      },
    ),
  ))();

export default StreamMixin;
