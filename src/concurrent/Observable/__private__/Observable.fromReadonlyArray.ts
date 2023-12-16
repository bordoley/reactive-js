import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";

const Observable_fromReadonlyArray: Observable.Signature["fromReadonlyArray"] =
  <T>(options?: { delay: number; delayStart?: boolean }) =>
  (array: ReadonlyArray<T>) =>
    Observable_createRunnable((observer: ObserverLike<T>) => {
      const { delay = 0, delayStart = false } = options ?? {};

      let i = 0;
      const { length } = array;

      const continuation = (ctx: ContinuationContextLike) => {
        while (!observer[DisposableLike_isDisposed] && i < length) {
          const next = array[i];
          observer[SinkLike_notify](next);
          i++;

          ctx[ContinuationContextLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
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
