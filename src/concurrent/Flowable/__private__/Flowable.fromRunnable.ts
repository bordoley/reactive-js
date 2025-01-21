import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  FlowableLike,
  FlowableLike_flow,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
  PauseableSchedulerLike,
  RunnableLike,
  SchedulerLike,
} from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";

const PauseableRunnable_create: <T>(
  obs: RunnableLike<T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> = /*@__PURE__*/ (<T>() => {
  const PauseableRunnable_scheduler = Symbol("PauseableRunnable_scheduler");

  type TProperties = {
    [PauseableRunnable_scheduler]: PauseableSchedulerLike;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin(), DelegatingMulticastObservableMixin()),
    function PauseableRunnable(
      instance: Pick<
        PauseableObservableLike<T>,
        | typeof PauseableLike_pause
        | typeof PauseableLike_resume
        | typeof PauseableLike_isPaused
      > &
        TProperties,
      obs: RunnableLike<T>,
      scheduler: SchedulerLike,
      multicastOptions?: {
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
        replay?: number;
      },
    ): PauseableObservableLike<T> {
      const pauseableScheduler = (instance[PauseableRunnable_scheduler] =
        PauseableScheduler.create(scheduler));

      const multicastObs = pipe(
        obs,
        Observable.multicast(pauseableScheduler, multicastOptions),
        Disposable.bindTo(pauseableScheduler),
      );

      init(DelegatingDisposableMixin(), instance, pauseableScheduler);
      init(DelegatingMulticastObservableMixin<T>(), instance, multicastObs);

      return instance;
    },
    props<TProperties>({
      [PauseableRunnable_scheduler]: none,
    }),
    {
      get [PauseableLike_isPaused]() {
        unsafeCast<TProperties>(this);
        return this[PauseableRunnable_scheduler][PauseableLike_isPaused];
      },

      [PauseableLike_pause](this: TProperties) {
        this[PauseableRunnable_scheduler][PauseableLike_pause]();
      },

      [PauseableLike_resume](this: TProperties) {
        this[PauseableRunnable_scheduler][PauseableLike_resume]();
      },
    },
  );
})();

const Flowable_fromRunnable: Flowable.Signature["fromRunnable"] =
  <T>() =>
  (obs: RunnableLike<T>): FlowableLike<T> => ({
    [FlowableLike_flow]: (scheduler, options) =>
      PauseableRunnable_create(obs, scheduler, options),
  });

export default Flowable_fromRunnable;
