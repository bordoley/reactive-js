import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  QueueableLike_enqueue,
  QueueableLike_isCompleted,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ Observable_createPureSynchronousObservable(
    (observer: ObserverLike<number>) => {
      const continuation = (ctx: ContinuationContextLike) => {
        while (!observer[QueueableLike_isCompleted]) {
          observer[QueueableLike_enqueue](observer[SchedulerLike_now]);
          ctx[ContinuationContextLike_yield]();
        }
      };

      pipe(
        observer[SchedulerLike_schedule](continuation),
        Disposable.addTo(observer),
      );
    },
  );

export default Observable_currentTime;
