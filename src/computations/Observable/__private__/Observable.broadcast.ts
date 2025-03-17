import * as Computation from "../../Computation.js";
import { Optional, pipe } from "../../../functions.js";

const ObservableModule = {
  forEach: Observable_forEach,
};

const Observable_broadcast: Observable.Signature["broadcast"] =
  (
    scheduler: SchedulerLike,
    options: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
    } = {},
  ) =>
  observable => {
    const subject = Subject.create(options);

    pipe(
      observable,
      Computation.notify(ObservableModule)(subject),
      Observable_subscribe(scheduler),
      Disposable.bindTo(subject),
    );

    return subject;
  };

export default Observable_broadcast;

import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  PauseableObservableLike,
  SynchronousObservableLike,
} from "../../../computations.js";
import * as Disposable from "../../../utils/Disposable.js";
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
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_multicast from "./Observable.multicast.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_toPauseableObservable: Observable.Signature["toPauseableObservable"] =
  /*@__PURE__*/ (<T>() => {
    const createPauseableSynchronousObservable = mixInstanceFactory(
      include(
        DelegatingDisposableMixin,
        DelegatingBroadcasterMixin(),
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

        init(DelegatingBroadcasterMixin<T>(), this, multicastObs);

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
