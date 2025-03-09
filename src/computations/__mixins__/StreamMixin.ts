import { Mixin3, include, init, mix } from "../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  PureDeferredObservableLike,
  StreamLike,
} from "../../computations.js";
import { Function1, Optional, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDispatcherMixin from "../../utils/__mixins__/DelegatingDispatcherMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  SchedulerLike,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as SingleUseObservable from "../__internal__/SingleUseObservable.js";
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
        DelegatingDispatcherMixin(),
        DelegatingMulticastObservableMixin<T>(),
      ),
      function Stream(
        instance: unknown,
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
        const dispatcher = SingleUseObservable.create<TReq>(options);

        const delegate = pipe(
          dispatcher,
          op,
          Observable.multicast<T>(scheduler, options),
          Disposable.addTo(dispatcher),
        );

        init(DelegatingDisposableMixin, instance, dispatcher);
        init(DelegatingDispatcherMixin<TReq>(), instance, dispatcher);
        init(DelegatingMulticastObservableMixin<T>(), instance, delegate);

        return instance;
      },
    ),
  ))();

export default StreamMixin;
