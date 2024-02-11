import {
  Iterator_done,
  Iterator_next,
  Iterator_value,
  Symbol,
} from "../../../__internal__/constants.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
import { Optional, error, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureRunnableWithSideEffects from "./Observable.createRunnableWithSideEffects.js";

const Observable_fromIterable: Observable.Signature["fromIterable"] =
  <T>(options?: { delay: number; delayStart?: boolean }) =>
  (iterable: Iterable<T>) =>
    Observable_createPureRunnableWithSideEffects(
      (observer: ObserverLike<T>) => {
        const { delay = 0, delayStart = false } = options ?? {};

        const iterator = iterable[Symbol.iterator]();

        const continuation = (ctx: ContinuationContextLike) => {
          while (!observer[DisposableLike_isDisposed]) {
            let next: Optional<IteratorResult<T, any>> = none;

            try {
              next = iterator[Iterator_next]();
            } catch (e) {
              // Catch any errors thrown by the iterator
              observer[DisposableLike_dispose](error(e));
            }

            if (isSome(next) && !next[Iterator_done]) {
              observer[ObserverLike_notify](next[Iterator_value]);
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
      },
    );

export default Observable_fromIterable;
