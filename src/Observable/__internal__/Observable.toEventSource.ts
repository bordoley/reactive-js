import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import type * as Observable from "../../Observable.js";
import Scheduler_createHostScheduler from "../../Scheduler/__internal__/Scheduler.createHostScheduler.js";
import {
  bindMethod,
  identity,
  isFunction,
  isNone,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import {
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  SinkLike_notify,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_toEventSource: Observable.Signature["toEventSource"] =
  <T>(
    schedulerOrNone?: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
  (obs: ObservableLike<T>) => {
    if (Observable_isEnumerable(obs) && isNone(schedulerOrNone)) {
      return EventSource_create<T>(listener => {
        const enumerator = obs[EnumerableLike_enumerate]();
        while (enumerator[EnumeratorLike_move]()) {
          listener[SinkLike_notify](enumerator[EnumeratorLike_current]);
        }
      });
    } else {
      const schedulerOrFactory = isNone(schedulerOrNone)
        ? Scheduler_createHostScheduler
        : none;
      const isSchedulerFactory = isFunction(schedulerOrFactory);
      const schedulerDisposable = isSchedulerFactory
        ? schedulerOrFactory()
        : none;
      const scheduler =
        schedulerDisposable ?? (schedulerOrNone as SchedulerLike);

      return EventSource_create<T>(listener =>
        pipe(
          obs,
          Observable_forEach(bindMethod(listener, SinkLike_notify)),
          Observable_subscribe(scheduler, options),
          Disposable_bindTo(listener),
          isSome(schedulerDisposable)
            ? Disposable_add(schedulerDisposable)
            : identity,
        ),
      );
    }
  };

export default Observable_toEventSource;
