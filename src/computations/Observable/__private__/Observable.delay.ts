import {
  DisposableLike_dispose,
  ObserverLike,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Observable_delay: Observable.Signature["delay"] = (delay: number) =>
  DeferredSource.create<unknown, ObserverLike>((observer: ObserverLike) =>
    observer[SchedulerLike_schedule](() => observer[DisposableLike_dispose](), {
      delay,
    }),
  );

export default Observable_delay;
