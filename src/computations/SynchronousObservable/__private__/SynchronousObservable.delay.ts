import {
  ObserverLike,
  SchedulerLike_schedule,
  SinkLike_complete,
} from "../../../utils.js";
import type * as SynchronousObservable from "../../SynchronousObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const SynchronousObservable_delay: SynchronousObservable.Signature["delay"] = (
  delay: number,
) =>
  DeferredEventSource.create<unknown, ObserverLike>((observer: ObserverLike) =>
    observer[SchedulerLike_schedule](
      function* () {
        observer[SinkLike_complete]();
      },
      { delay },
    ),
  );

export default SynchronousObservable_delay;
