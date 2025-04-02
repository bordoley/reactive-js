import {
  ObserverLike,
  SchedulerLike_schedule,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Observable_delay: Observable.Signature["delay"] = (delay: number) =>
  DeferredEventSource.create<unknown, ObserverLike>((observer: ObserverLike) =>
    observer[SchedulerLike_schedule](
      function* () {
        observer[SinkLike_complete]();
      },
      { delay },
    ),
  );

export default Observable_delay;
