import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { none, pipe } from "../../functions.js";
import {
  DisposableLike_isDisposed,
  EnumeratorFactoryLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
  SinkLike_notify,
} from "../../types.js";

const EnumeratorFactory_toObservable: EnumeratorFactory.Signature["toObservable"] =
  (<T>(options?: { readonly delay?: number; readonly delayStart?: boolean }) =>
    (factory: EnumeratorFactoryLike<T>) => {
      const { delay = 0, delayStart = false } = options ?? {};

      const onSubscribe = (observer: ObserverLike<T>) => {
        const enumerator = pipe(factory(), Disposable_bindTo(observer));

        const continuation = (scheduler: SchedulerLike) => {
          while (
            !observer[DisposableLike_isDisposed] &&
            enumerator[EnumeratorLike_move]()
          ) {
            const next = enumerator[EnumeratorLike_current];
            observer[SinkLike_notify](next);
            scheduler[SchedulerLike_yield](delay);
          }
        };

        pipe(
          observer[SchedulerLike_schedule](
            continuation,
            delayStart ? options : none,
          ),
          Disposable_addTo(observer),
        );
      };

      return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
    }) as EnumeratorFactory.Signature["toObservable"];
export default EnumeratorFactory_toObservable;
