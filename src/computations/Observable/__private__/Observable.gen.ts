import {
  Iterator_done,
  Iterator_next,
  Iterator_value,
  Symbol,
} from "../../../__internal__/constants.js";
import {
  Factory,
  Optional,
  error,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import {
  ConsumerLike_addOnReadyListener,
  ConsumerLike_isReady,
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_schedule,
  SerialDisposableLike_current,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";

const Observable_gen: Observable.Signature["gen"] = <T>(
  factory: Factory<Generator<T>>,
  options?: {
    delay?: number;
    delayStart?: boolean;
  },
) =>
  Observable_createPureSynchronousObservable((observer: ObserverLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const iterable = factory();

    const iterator = iterable[Symbol.iterator]();
    const subscription = SerialDisposable.create();

    pipe(
      observer,
      DisposableContainer.onDisposed(() => iterator.return(none)),
      Disposable.add(observer),
    );

    const continuation = (ctx: ContinuationContextLike) => {
      while (observer[ConsumerLike_isReady]) {
        let next: Optional<IteratorResult<T, any>> = none;

        try {
          next = iterator[Iterator_next]();
        } catch (e) {
          // Catch any errors thrown by the iterator
          observer[DisposableLike_dispose](error(e));
          break;
        }

        if (isSome(next) && !next[Iterator_done]) {
          const v = next[Iterator_value];
          observer[EventListenerLike_notify](v);
          ctx[ContinuationContextLike_yield](delay);
        } else {
          observer[SinkLike_complete]();
        }
      }
    };

    subscription[SerialDisposableLike_current] = pipe(
      observer[SchedulerLike_schedule](
        continuation,
        delayStart ? options : none,
      ),
      Disposable.addTo(observer),
    );

    observer[ConsumerLike_addOnReadyListener](() => {
      const active =
        !subscription[SerialDisposableLike_current][DisposableLike_isDisposed];

      if (active) {
        return;
      }

      subscription[SerialDisposableLike_current] = pipe(
        observer[SchedulerLike_schedule](continuation),
        Disposable.addTo(observer),
      );
    });

    subscription[SerialDisposableLike_current] = pipe(
      observer[SchedulerLike_schedule](
        continuation,
        delayStart ? options : none,
      ),
      Disposable.addTo(observer),
    );
  });

export default Observable_gen;
