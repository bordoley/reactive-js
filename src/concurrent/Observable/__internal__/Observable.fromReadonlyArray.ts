import {
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../../concurrent.js";
import { none } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  SinkLike_notify,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";

const Observable_fromReadonlyArray: Observable.Signature["fromReadonlyArray"] =
  <T>(options?: { delay: number; delayStart?: boolean }) =>
  (array: ReadonlyArray<T>) =>
    Observable_createRunnable((observer: ObserverLike<T>) => {
      const { delay = 0, delayStart = false } = options ?? {};

      let i = 0;
      const { length } = array;

      const continuation = (scheduler: SchedulerLike) => {
        while (!observer[DisposableLike_isDisposed] && i < length) {
          const next = array[i];
          observer[SinkLike_notify](next);
          i++;

          scheduler[SchedulerLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
      };

      observer[SchedulerLike_schedule](
        continuation,
        delayStart ? { delay } : none,
      );
    });

export default Observable_fromReadonlyArray;
