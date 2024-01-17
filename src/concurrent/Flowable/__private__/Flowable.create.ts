import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  FlowableLike,
  FlowableLike_flow,
  MulticastObservableLike,
  ObservableLike_observe,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
  PureDeferredObservableLike,
  SchedulerLike,
  StreamLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import { StoreLike_value, WritableStoreLike } from "../../../events.js";
import * as WritableStore from "../../../events/WritableStore.js";
import { Function1, invoke, none, pipe } from "../../../functions.js";
import {
  BackpressureStrategy,
  DropOldestBackpressureStrategy,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import * as Streamable from "../../Streamable.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";

const PauseableObservable_create: <T>(
  op: Function1<MulticastObservableLike<boolean>, DeferredObservableLike<T>>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin(), DelegatingMulticastObservableMixin()),
    function PauseableObservable(
      instance: Pick<
        PauseableObservableLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<
        MulticastObservableLike<boolean>,
        DeferredObservableLike<T>
      >,
      scheduler: SchedulerLike,
      multicastOptions?: {
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
        replay?: number;
      },
    ): PauseableObservableLike<T> {
      const liftedOp = (mode: PureDeferredObservableLike<boolean>) =>
        Observable.create(observer => {
          const pauseableScheduler = pipe(
            observer,
            PauseableScheduler.create,
            Disposable.addTo(observer),
          );

          const multicastedMode = pipe(
            mode,
            Observable.mergeWith(
              // Initialize to paused state
              pipe(true, Observable.fromValue()),
            ),
            Observable.distinctUntilChanged<boolean>(),
            Observable.multicast(observer, {
              replay: 1,
              capacity: 1,
              backpressureStrategy: DropOldestBackpressureStrategy,
            }),
            Disposable.addTo(observer),
          );

          pipe(
            multicastedMode,
            Observable.forEach((isPaused: boolean) => {
              instance[PauseableLike_isPaused][StoreLike_value] = isPaused;

              if (isPaused) {
                pauseableScheduler[PauseableLike_pause]();
              } else {
                pauseableScheduler[PauseableLike_resume]();
              }
            }),
            Observable.subscribe(observer),
            Disposable.addTo(observer),
          );

          pipe(
            multicastedMode,
            op,
            Observable.subscribeOn(pauseableScheduler),
            invoke(ObservableLike_observe, observer),
          );
        });

      const stream = Streamable.create<boolean, T>(liftedOp)[
        StreamableLike_stream
      ](scheduler, multicastOptions);
      init(DelegatingDisposableMixin(), instance, stream);
      init(DelegatingMulticastObservableMixin<T>(), instance, stream);

      instance[PauseableLike_isPaused] = WritableStore.create(true);

      return instance;
    },
    props<TProperties>({
      [PauseableLike_isPaused]: none,
    }),
    {
      [PauseableLike_pause](
        this: DelegatingDisposableLike<StreamLike<boolean, T>>,
      ) {
        this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](true);
      },

      [PauseableLike_resume](
        this: DelegatingDisposableLike<StreamLike<boolean, T>>,
      ) {
        this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](false);
      },
    },
  );
})();

const Flowable_create: Flowable.Signature["create"] = <T>(
  op: Function1<MulticastObservableLike<boolean>, DeferredObservableLike<T>>,
): FlowableLike<T> => ({
  [FlowableLike_flow]: (scheduler, options) =>
    PauseableObservable_create(op, scheduler, options),
});

export default Flowable_create;
