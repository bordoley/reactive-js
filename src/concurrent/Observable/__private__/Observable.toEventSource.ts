import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import * as EventSource from "../../../events/EventSource.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_notify from "./Observable.notify.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_toEventSource: Observable.Signature["toEventSource"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) =>
  (obs: ObservableLike<T>) =>
    EventSource.create<T>(listener =>
      pipe(
        obs,
        Observable_notify(listener),
        Observable_subscribe(scheduler, options),
        Disposable.bindTo(listener),
      ),
    );

export default Observable_toEventSource;
