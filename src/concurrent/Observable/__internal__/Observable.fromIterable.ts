import {
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../../concurrent.js";
import { Optional, error, isSome, none, pipe } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import Disposable_addTo from "../../../utils/Disposable/__internal__/Disposable.addTo.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";

const Observable_fromIterable: Observable.Signature["fromIterable"] =
  <T>(options?: { delay: number; delayStart?: boolean }) =>
  (iterable: Iterable<T>) =>
    Observable_create((observer: ObserverLike<T>) => {
      const { delay = 0, delayStart = false } = options ?? {};

      const iterator = iterable[Symbol.iterator]();

      const continuation = (scheduler: SchedulerLike) => {
        while (!observer[DisposableLike_isDisposed]) {
          let next: Optional<IteratorResult<T, any>> = none;

          try {
            next = iterator.next();
          } catch (e) {
            // Catch any errors thrown by the iterator
            observer[DisposableLike_dispose](error(e));
          }

          if (isSome(next) && !next.done) {
            observer[SinkLike_notify](next.value);
            scheduler[SchedulerLike_yield](delay);
          } else {
            observer[DisposableLike_dispose]();
          }
        }
      };

      pipe(
        observer[SchedulerLike_schedule](
          continuation,
          delayStart ? options : none,
        ),
        Disposable_addTo(observer),
      );
    });

export default Observable_fromIterable;
