import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { Factory, Updater, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_isDisposed } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";

const Observable_generate: Observable.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  },
) =>
  Observable_createPureRunnable((observer: ObserverLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    let acc = initialValue();

    const continuation = (ctx: ContinuationContextLike) => {
      while (!observer[DisposableLike_isDisposed]) {
        acc = generator(acc);
        observer[ObserverLike_notify](acc);

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
