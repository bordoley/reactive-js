import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { DisposableLike_isDisposed } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ Observable_createRunnable((observer: ObserverLike<number>) => {
    const continuation = (ctx: ContinuationContextLike) => {
      while (!observer[DisposableLike_isDisposed]) {
        observer[SinkLike_notify](observer[SchedulerLike_now]);
        ctx[ContinuationContextLike_yield]();
      }
    };

    observer[SchedulerLike_schedule](continuation);
  });

export default Observable_currentTime;
