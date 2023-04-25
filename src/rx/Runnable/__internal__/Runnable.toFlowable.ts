import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import {
  PauseableSchedulerLike_pause,
  PauseableSchedulerLike_resume,
  SchedulerLike,
} from "../../../scheduling.js";
import {
  FlowableLike,
  FlowableStreamLike,
  StreamableLike_stream,
  ToFlowable,
} from "../../../streaming.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import FlowableStream_create from "../../../streaming/Flowable/__internal__/FlowableStream.create.js";

const Runnable_toFlowable: ToFlowable<RunnableLike>["toFlowable"] = (<T>() =>
  returns(
    createInstanceFactory(
      mix(
        include(Delegating_mixin()),
        function RunnableFlowable(
          instance: FlowableLike<T>,
          delegate: RunnableLike<T>,
        ): FlowableLike<T> {
          init(Delegating_mixin(), instance, delegate);
          return instance;
        },
        props({}),
        {
          get [ObservableLike_isEnumerable](): boolean {
            unsafeCast<DelegatingLike<RunnableLike<T>>>(this);
            return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
          },

          get [ObservableLike_isRunnable](): boolean {
            unsafeCast<DelegatingLike<RunnableLike<T>>>(this);
            return this[DelegatingLike_delegate][ObservableLike_isRunnable];
          },

          [ObservableLike_observe](
            this: DelegatingLike<RunnableLike<T>>,
            observer: ObserverLike<T>,
          ) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
          },

          [StreamableLike_stream](
            this: DelegatingLike<RunnableLike<T>>,
            scheduler: SchedulerLike,
            options?: {
              readonly replay?: number;
              readonly capacity?: number;
              readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            },
          ): FlowableStreamLike<T> & DisposableLike {
            const op = (modeObs: ObservableLike<boolean>) =>
              Observable_create(observer => {
                const pauseableScheduler = pipe(
                  observer,
                  Scheduler_toPausableScheduler,
                  Disposable_addTo(observer),
                );

                pipe(
                  observer,
                  Observer_sourceFrom(
                    pipe(
                      this[DelegatingLike_delegate],
                      Observable_subscribeOn(pauseableScheduler),
                    ),
                  ),
                  Disposable_add(
                    pipe(
                      modeObs,
                      Observable_forEach<ObservableLike, boolean>(isPaused => {
                        if (isPaused) {
                          pauseableScheduler[PauseableSchedulerLike_pause]();
                        } else {
                          pauseableScheduler[PauseableSchedulerLike_resume]();
                        }
                      }),
                      Observable_subscribeWithConfig(observer, observer),
                      Disposable_bindTo(pauseableScheduler),
                    ),
                  ),
                  Disposable_add(pauseableScheduler),
                );
              });

            return FlowableStream_create<T>(op, scheduler, options);
          },
        },
      ),
    ),
  ))();

export default Runnable_toFlowable;
