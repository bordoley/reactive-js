import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_schedule,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";

const Observable_fromReadonlyArray: Observable.Signature["fromReadonlyArray"] =
  <T>(options?: {
    delay?: number;
    delayStart?: boolean;
    count?: number;
    start?: number;
  }) =>
  (arr: readonly T[]) =>
    Observable_createPureSynchronousObservable((observer: ObserverLike<T>) => {
      const { delay = 0, delayStart = false } = options ?? {};

      let [start, count] = parseArrayBounds(arr, options);

      const continuation = (ctx: ContinuationContextLike) => {
        while (!observer[SinkLike_isCompleted] && count !== 0) {
          const next = arr[start];
          observer[EventListenerLike_notify](next);

          count > 0 ? (start++, count--) : (start--, count++);

          if (count !== 0) {
            ctx[ContinuationContextLike_yield](delay);
          }
        }
        observer[SinkLike_complete]();
      };

      pipe(
        observer[SchedulerLike_schedule](
          continuation,
          delayStart ? { delay } : none,
        ),
        Disposable.addTo(observer),
      );
    });

export default Observable_fromReadonlyArray;
