import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  PureDeferredObservableLike,
  SchedulerLike,
  StreamLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import { Function1, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import * as SingleUseObservable from "../../__internal__/SingleUseObservable.js";
import { SingleUseObservableLike_observer } from "../../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";

const Stream_create: <TReq, T>(
  op: Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly replay?: number;
    readonly capacity?: number;
  },
) => StreamLike<TReq, T> = /*@__PURE__*/ (<TReq, T>() =>
  mixInstanceFactory(
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
  ))();

const Streamable_create: Streamable.Signature["create"] = <TReq, T>(
  op: Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>,
) => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
