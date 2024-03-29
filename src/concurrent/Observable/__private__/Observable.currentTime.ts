import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { DisposableLike_isDisposed } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ Observable_createPureRunnable(
    (observer: ObserverLike<number>) => {
      const continuation = (ctx: ContinuationContextLike) => {
        while (!observer[DisposableLike_isDisposed]) {
          observer[ObserverLike_notify](observer[SchedulerLike_now]);
          ctx[ContinuationContextLike_yield]();
        }
      };

      observer[SchedulerLike_schedule](continuation);
    },
  );

export default Observable_currentTime;
