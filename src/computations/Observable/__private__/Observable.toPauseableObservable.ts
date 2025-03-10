import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  PauseableObservableLike,
  SynchronousObservableLike,
} from "../../../computations.js";
import { Optional, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
import Observable_multicast from "./Observable.multicast.js";

const Observable_toPauseableObservable: Observable.Signature["toPauseableObservable"] =
  /*@__PURE__*/ (<T>() => {
    const createPauseableSynchronousObservable = mixInstanceFactory(
      include(
        DelegatingDisposableMixin,
        DelegatingMulticastObservableMixin(),
        DelegatingPauseableMixin,
      ),
      function PauseableSynchronousObservable(
        this: Pick<
          PauseableObservableLike<T>,
          | typeof PauseableLike_pause
          | typeof PauseableLike_resume
          | typeof PauseableLike_isPaused
        >,
        obs: SynchronousObservableLike<T>,
        scheduler: SchedulerLike,
        multicastOptions: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
          replay?: number;
        }>,
      ): PauseableObservableLike<T> & DisposableLike {
        const pauseableScheduler = PauseableScheduler.create(scheduler);
        init(DelegatingDisposableMixin, this, pauseableScheduler);
        init(DelegatingPauseableMixin, this, pauseableScheduler);

        const multicastObs = pipe(
          obs,
          Observable_multicast(pauseableScheduler, multicastOptions),
          Disposable.bindTo(this),
        );

        init(DelegatingMulticastObservableMixin<T>(), this, multicastObs);

        return this;
      },
    );

    return (
        scheduler: SchedulerLike,
        options?: {
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
          readonly replay?: number;
        },
      ) =>
      (obs: SynchronousObservableLike<T>) =>
        createPauseableSynchronousObservable(obs, scheduler, options);
  })();

export default Observable_toPauseableObservable;
