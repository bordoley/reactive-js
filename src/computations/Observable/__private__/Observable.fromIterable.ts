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
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_schedule,
  SinkLike_complete,
  SinkLike_isCompleted,
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
        while (!observer[SinkLike_isCompleted]) {
          let next: Optional<IteratorResult<T, any>> = none;

          try {
            next = iterator[Iterator_next]();
          } catch (e) {
            // Catch any errors thrown by the iterator
            observer[DisposableLike_dispose](error(e));
            break;
          }

          if (isSome(next) && !next[Iterator_done]) {
            observer[EventListenerLike_notify](next[Iterator_value]);
            ctx[ContinuationContextLike_yield](delay);
          } else {
            observer[SinkLike_complete]();
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
