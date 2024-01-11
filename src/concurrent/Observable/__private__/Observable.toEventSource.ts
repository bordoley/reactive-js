import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { EventListenerLike_notify } from "../../../events.js";
import * as EventSource from "../../../events/EventSource.js";
import { bindMethod, pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_toEventSource: Observable.Signature["toEventSource"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
  (obs: ObservableLike<T>) =>
    EventSource.create<T>(listener =>
      pipe(
        obs,
        Observable_forEach(bindMethod(listener, EventListenerLike_notify)),
        Observable_subscribe(scheduler, options),
        Disposable.bindTo(listener),
      ),
    );

export default Observable_toEventSource;
