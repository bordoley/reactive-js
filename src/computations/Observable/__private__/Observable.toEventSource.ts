import * as Computation from "../../../computations/Computation.js";
import * as EventSource from "../../../computations/EventSource.js";
import { ObservableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const ObservableModule = { forEach: Observable_forEach };

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
        Computation.notify(ObservableModule)(listener),
        Observable_subscribe(scheduler, options),
        Disposable.bindTo(listener),
      ),
    );

export default Observable_toEventSource;
