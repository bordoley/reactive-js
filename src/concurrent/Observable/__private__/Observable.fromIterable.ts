import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { Optional, error, isSome, none, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_createRunnableWithSideEffects from "./Observable.createRunnableWithSideEffects.js";

const Observable_fromIterable: Observable.Signature["fromIterable"] =
  <T>(options?: { delay: number; delayStart?: boolean }) =>
  (iterable: Iterable<T>) =>
    Observable_createRunnableWithSideEffects((observer: ObserverLike<T>) => {
      const { delay = 0, delayStart = false } = options ?? {};

      const iterator = iterable[Symbol.iterator]();

      const continuation = (ctx: ContinuationContextLike) => {
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
            ctx[ContinuationContextLike_yield](delay);
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
        Disposable.addTo(observer),
      );
    });

export default Observable_fromIterable;
