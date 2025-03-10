import {
  Iterator_done,
  Iterator_next,
  Iterator_value,
  Symbol,
} from "../../../__internal__/constants.js";
import * as Computation from "../../../computations/Computation.js";
import { IterableLike } from "../../../computations.js";
import { Optional, error, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_createSynchronousObservableWithSideEffects from "./Observable.createSynchronousObservableWithSideEffects.js";

const Observable_fromIterable: Observable.Signature["fromIterable"] = (<
    T,
  >(options?: {
    delay: number;
    delayStart?: boolean;
  }) =>
  (iterable: IterableLike<T>) => {
    const create = Computation.isPure(iterable)
      ? Observable_createPureSynchronousObservable
      : Observable_createSynchronousObservableWithSideEffects;

    return create((observer: ObserverLike<T>) => {
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
    });
  }) as Observable.Signature["fromIterable"];

export default Observable_fromIterable;
