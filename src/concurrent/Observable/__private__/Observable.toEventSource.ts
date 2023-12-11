import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import * as EventSource from "../../../events/EventSource.js";
import {
  bindMethod,
  identity,
  isFunction,
  isNone,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as HostScheduler from "../../HostScheduler.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
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
    const schedulerOrFactory = isNone(schedulerOrNone)
      ? HostScheduler.create
      : none;
    const isSchedulerFactory = isFunction(schedulerOrFactory);
    const schedulerDisposable = isSchedulerFactory
      ? schedulerOrFactory()
      : none;
    const scheduler = schedulerDisposable ?? (schedulerOrNone as SchedulerLike);

    return EventSource.create<T>(listener =>
      pipe(
        obs,
        Observable_forEach(bindMethod(listener, SinkLike_notify)),
        Observable_subscribe(scheduler, options),
        Disposable.bindTo(listener),
        isSome(schedulerDisposable)
          ? Disposable.add(schedulerDisposable)
          : identity,
      ),
    );
  };

export default Observable_toEventSource;
