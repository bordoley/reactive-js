import { Mixin3, include, init, mix } from "../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  PureDeferredObservableLike,
  StreamLike,
} from "../../computations.js";
import { Function1, Optional, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../../utils/__mixins__/DelegatingQueueableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  SchedulerLike,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as QueueableObservable from "../__internal__/QueueableObservable.js";
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
        DelegatingQueueableMixin(),
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
        const queue = QueueableObservable.create<TReq>(options);

        const delegate = pipe(
          queue,
          op,
          Observable.multicast<T>(scheduler, options),
          Disposable.addTo(queue),
        );

        init(DelegatingDisposableMixin, this, queue);
        init(DelegatingQueueableMixin<TReq>(), this, queue);
        init(DelegatingMulticastObservableMixin<T>(), this, delegate);

        return this;
      },
    ),
  ))();

export default StreamMixin;
