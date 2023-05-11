import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as Observable from "../../Observable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { Factory, Updater, none, pipe } from "../../functions.js";
import {
  DisposableLike_isDisposed,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../types.js";

const Runnable_generate: Observable.Signature["generate"] = (<T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): RunnableLike<T> => {
  const { delay = 0, delayStart = false } = options ?? {};

  const onSubscribe = (observer: ObserverLike<T>) => {
    let acc = initialValue();
    const continuation = (scheduler: SchedulerLike) => {
      while (!observer[DisposableLike_isDisposed]) {
        acc = generator(acc);
        observer[ObserverLike_notify](acc);
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
}) as Observable.Signature["generate"];

export default Runnable_generate;
