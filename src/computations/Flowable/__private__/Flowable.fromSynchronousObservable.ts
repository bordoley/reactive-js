import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  FlowableLike,
  FlowableLike_flow,
  PauseableObservableLike,
  SynchronousObservableLike,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";

const PauseableSynchronousObservable_create: <T>(
  obs: SynchronousObservableLike<T>,
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
    function PauseableSynchronousObservable(
      instance: Pick<
        PauseableObservableLike<T>,
        | typeof PauseableLike_pause
        | typeof PauseableLike_resume
        | typeof PauseableLike_isPaused
      >,
      obs: SynchronousObservableLike<T>,
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

const Flowable_fromSynchronousObservable: Flowable.Signature["fromSynchronousObservable"] =

    <T>() =>
    (obs: SynchronousObservableLike<T>): FlowableLike<T> => ({
      [FlowableLike_flow]: (scheduler, options) =>
        PauseableSynchronousObservable_create(obs, scheduler, options),
    });

export default Flowable_fromSynchronousObservable;
