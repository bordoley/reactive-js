import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { EventSourceLike, ObservableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
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
import EventSource_create from "../../EventSource/__private__/EventSource.create.js";
import type * as Observable from "../../Observable.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const createPauseableEventSource = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingPauseableMixin,
      DelegatingEventSourceMixin(),
    ),
    function PauseableEventSourceFromSynchronousObservable(
      this: Pick<
        PauseableLike,
        | typeof PauseableLike_pause
        | typeof PauseableLike_resume
        | typeof PauseableLike_isPaused
      >,
      obs: ObservableLike<T>,
      scheduler: SchedulerLike,
    ): PauseableLike & EventSourceLike<T> & DisposableLike {
      const pauseableScheduler = PauseableScheduler.create(scheduler);

      const eventSource = pipe(
        createEventSource(obs, scheduler),
        Disposable.bindTo(pauseableScheduler),
      );

      init(DelegatingDisposableMixin, this, pauseableScheduler);
      init(DelegatingPauseableMixin, this, pauseableScheduler);
      init(DelegatingEventSourceMixin(), this, eventSource);

      return this;
    },
  ))();

const ObservableModule = { forEach: Observable_forEach };

const createEventSource = <T>(
  obs: ObservableLike<T>,
  scheduler: SchedulerLike,
) =>
  EventSource_create<T>(listener =>
    pipe(
      obs,
      Computation.notify(ObservableModule)(listener),
      Observable_subscribe(scheduler),
      Disposable.bindTo(listener),
    ),
  );

const Observable_toEventSource: Observable.Signature["toEventSource"] = (<T>(
    scheduler: SchedulerLike,
  ) =>
  (obs: ObservableLike<T>) =>
    Computation.isSynchronous(obs)
      ? createPauseableEventSource(obs, scheduler)
      : createEventSource(
          obs,
          scheduler,
        )) as Observable.Signature["toEventSource"];

export default Observable_toEventSource;
