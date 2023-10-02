import {
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../ix.js";
import { SinkLike_notify } from "../../../rx.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_createRunnable from "./Observable.createRunnable.js";

const Observable_fromEnumerable: Observable.Signature["fromEnumerable"] =
  <T>(options?: { delay: number; delayStart?: boolean }) =>
  (enumerable: EnumerableLike<T>) =>
    Observable_createRunnable((observer: ObserverLike<T>) => {
      const { delay = 0, delayStart = false } = options ?? {};

      const enumerator = pipe(
        enumerable[EnumerableLike_enumerate](),
        Disposable.addTo(observer),
      );

      const continuation = (scheduler: SchedulerLike) => {
        while (
          !observer[DisposableLike_isDisposed] &&
          enumerator[EnumeratorLike_move]()
        ) {
          const next = enumerator[EnumeratorLike_current];
          observer[SinkLike_notify](next);
          scheduler[SchedulerLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
      };

      observer[SchedulerLike_schedule](
        continuation,
        delayStart ? { delay } : none,
      );
    });

export default Observable_fromEnumerable;
