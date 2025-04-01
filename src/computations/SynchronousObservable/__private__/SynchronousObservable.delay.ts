import {
  DisposableLike_dispose,
  ObserverLike,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as SynchronousObservable from "../../SynchronousObservable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const SynchronousObservable_delay: SynchronousObservable.Signature["delay"] = (
  delay: number,
) =>
  DeferredReactiveSource.create<unknown, ObserverLike>(
    (observer: ObserverLike) =>
      observer[SchedulerLike_schedule](
        () => observer[DisposableLike_dispose](),
        {
          delay,
        },
      ),
  );

export default SynchronousObservable_delay;
