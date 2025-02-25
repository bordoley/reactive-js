import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  FlowableLike,
  FlowableLike_flow,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
  RunnableLike,
  SchedulerLike,
} from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";

const PauseableRunnable_create: <T>(
  obs: RunnableLike<T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> = /*@__PURE__*/ (<T>() => {
  return mixInstanceFactory(
    include(
      DelegatingDisposableMixin(),
      DelegatingMulticastObservableMixin(),
      DelegatingPauseableMixin,
    ),
    function PauseableRunnable(
      instance: Pick<
        PauseableObservableLike<T>,
        | typeof PauseableLike_pause
        | typeof PauseableLike_resume
        | typeof PauseableLike_isPaused
      >,
      obs: RunnableLike<T>,
      scheduler: SchedulerLike,
      multicastOptions?: {
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
        replay?: number;
      },
    ): PauseableObservableLike<T> {
      const pauseableScheduler = PauseableScheduler.create(scheduler);
      init(DelegatingDisposableMixin(), instance, pauseableScheduler);
      init(DelegatingPauseableMixin, instance, pauseableScheduler);

      const multicastObs = pipe(
        obs,
        Observable.multicast(pauseableScheduler, multicastOptions),
        Disposable.bindTo(instance),
      );

      init(DelegatingMulticastObservableMixin<T>(), instance, multicastObs);

      return instance;
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
