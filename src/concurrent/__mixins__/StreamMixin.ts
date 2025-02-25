import { Mixin3, include, init, mix } from "../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  PureDeferredObservableLike,
  SchedulerLike,
  StreamLike,
} from "../../concurrent.js";
import { Function1, Optional, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { BackpressureStrategy } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as SingleUseObservable from "../__internal__/SingleUseObservable.js";
import { SingleUseObservableLike_observer } from "../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";

const StreamMixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T>,
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
      ): StreamLike<TReq, T> {
        const singleUseObservable = SingleUseObservable.create<TReq>();

        const delegate = pipe(
          singleUseObservable,
          op,
          Observable.multicast<T>(scheduler, options),
        );

        init(
          DelegatingDispatcherMixin<TReq>(),
          instance,
          singleUseObservable[SingleUseObservableLike_observer],
        );
        init(DelegatingMulticastObservableMixin<T>(), instance, delegate);

        pipe(delegate, Disposable.addTo(instance));

        return instance;
      },
    ),
  ))();

export default StreamMixin;
