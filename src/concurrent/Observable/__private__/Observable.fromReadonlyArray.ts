import {
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import Indexed_toCollection from "../../../collections/Indexed/__private__/Indexed.toCollection.js";
import { ReadonlyArrayCollection } from "../../../collections/ReadonlyArray.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  PureRunnableLike,
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
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";

interface ValuesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: PureRunnableLike<
    this[typeof KeyedCollection_T]
  >;
}

const Observable_fromReadonlyArray: Observable.Signature["fromReadonlyArray"] =
  (options?: {
    delay?: number;
    delayStart?: boolean;
    count?: number;
    start?: number;
  }) =>
    Indexed_toCollection<ReadonlyArrayCollection, ValuesCollection>(
      <_ extends number, T>(
        arr: readonly T[],
        startIndex: number,
        count: number,
      ) =>
        Observable_createPureRunnable((observer: ObserverLike<T>) => {
          const { delay = 0, delayStart = false } = options ?? {};

          let iterCount = count;
          let iterStartIndex = startIndex;

          const continuation = (ctx: ContinuationContextLike) => {
            while (!observer[DisposableLike_isDisposed] && iterCount !== 0) {
              const next = arr[iterStartIndex];
              observer[SinkLike_notify](next);

              iterCount > 0
                ? (iterStartIndex++, iterCount--)
                : (iterStartIndex--, iterCount++);

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
        }),
      v => v.length,
    )(options);

export default Observable_fromReadonlyArray;
