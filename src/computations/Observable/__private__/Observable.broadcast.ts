import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { Optional, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import * as Sink from "../../../utils/Sink.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  DisposableLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";

const broadcastObservable = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
  options?: {
    readonly autoDispose?: boolean;
    readonly replay?: number;
  },
) => {
  const subject = Subject.create<T>(options);
  const observer = pipe(subject, Sink.toObserver(scheduler));
  observable[ObservableLike_observe](observer);
  return subject;
};

const createPauseableBroadcasterFromSynchronousObservable = /*@__PURE__*/ (<
  T,
>() =>
  mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingPauseableMixin,
      DelegatingBroadcasterMixin(),
    ),
    function PauseableBroadcasterFromSynchronousObservable(
      this: Pick<
        PauseableLike,
        | typeof PauseableLike_pause
        | typeof PauseableLike_resume
        | typeof PauseableLike_isPaused
      >,
      obs: ObservableLike<T>,
      scheduler: SchedulerLike,
      multicastOptions: Optional<{
        replay?: number;
      }>,
    ): PauseableLike & BroadcasterLike<T> & DisposableLike {
      const pauseableScheduler = PauseableScheduler.create(scheduler);
      init(DelegatingDisposableMixin, this, pauseableScheduler);
      init(DelegatingPauseableMixin, this, pauseableScheduler);

      const multicastObs = pipe(
        broadcastObservable(obs, pauseableScheduler, multicastOptions),
        Disposable.bindTo(this),
      );

      init(DelegatingBroadcasterMixin<T>(), this, multicastObs);

      return this;
    },
  ))();

const Observable_broadcast: Observable.Signature["broadcast"] = (<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
    },
  ) =>
  (observable: ObservableLike<T>) =>
    Computation.isSynchronous(observable)
      ? createPauseableBroadcasterFromSynchronousObservable(
          observable,
          scheduler,
          options,
        )
      : broadcastObservable(
          observable,
          scheduler,
          options,
        )) as Observable.Signature["broadcast"];

export default Observable_broadcast;
