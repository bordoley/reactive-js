import { Mixin3, include, init, mix } from "../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  PureDeferredObservableLike,
  StreamLike,
} from "../../computations.js";
import { Function1, Optional, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingQueueableMixin from "../../utils/__mixins__/DelegatingQueueableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as QueueableObservable from "../__internal__/QueueableObservable.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";
import { config } from "process";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../math.js";

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
          Observable.backpressureStrategy({
            backpressureStrategy:
              options?.backpressureStrategy ?? OverflowBackpressureStrategy,
            capacity: clampPositiveInteger(
              options?.capacity ?? MAX_SAFE_INTEGER,
            ),
          }),
          op,
          Observable.multicast<T>(scheduler, options),
          Disposable.addTo(queue),
        );

        init(DelegatingQueueableMixin<TReq>(), this, queue);
        init(DelegatingMulticastObservableMixin<T>(), this, delegate);

        return this;
      },
    ),
  ))();

export default StreamMixin;
