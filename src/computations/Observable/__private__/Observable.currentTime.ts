import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike_isDisposed,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ Observable_createPureSynchronousObservable(
    (observer: ObserverLike<number>) => {
      const continuation = (ctx: ContinuationContextLike) => {
        while (!observer[DisposableLike_isDisposed]) {
          observer[ObserverLike_notify](observer[SchedulerLike_now]);
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
