import {
  ObserverLike,
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ Observable_createRunnable((observer: ObserverLike<number>) => {
    const continuation = (scheduler: SchedulerLike) => {
      while (!observer[DisposableLike_isDisposed]) {
        observer[SinkLike_notify](scheduler[SchedulerLike_now]);
        scheduler[SchedulerLike_yield]();
      }
    };

    observer[SchedulerLike_schedule](continuation);
  });

export default Observable_currentTime;
