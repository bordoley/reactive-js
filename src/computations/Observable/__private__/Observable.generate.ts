import { Factory, Updater, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike_enqueue,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";

const Observable_generate: Observable.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
  },
) =>
  Observable_createPureSynchronousObservable((observer: ObserverLike<T>) => {
    const { count, delay = 0, delayStart = false } = options ?? {};

    let acc = initialValue();
    let cnt = 0;

    const continuation = (ctx: ContinuationContextLike) => {
      while (!observer[DisposableLike_isDisposed]) {
        acc = generator(acc);
        observer[QueueableLike_enqueue](acc);

        if (count !== none && (cnt++, cnt >= count)) {
          observer[DisposableLike_dispose]();
          break;
        }

        ctx[ContinuationContextLike_yield](delay);
      }
    };

    pipe(
      observer[SchedulerLike_schedule](
        continuation,
        delayStart ? { delay } : none,
      ),
      Disposable.addTo(observer),
    );
  });

export default Observable_generate;
