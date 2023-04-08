import { Factory, Updater, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike_schedule,
} from "../../../scheduling.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";

interface ObservableGenerate {
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): EnumerableLike<T>;
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options: { readonly delay: number; readonly delayStart?: boolean },
  ): RunnableLike<T>;
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: { readonly delay?: number; readonly delayStart?: boolean },
  ): RunnableLike<T>;
}
const Observable_generate: ObservableGenerate["generate"] = (<T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): RunnableLike<T> => {
  const { delay = 0, delayStart = false } = options ?? {};

  const onSubscribe = (observer: ObserverLike<T>) => {
    let acc = initialValue();
    const continuation = (ctx: ContinuationContextLike) => {
      while (!observer[DisposableLike_isDisposed]) {
        acc = generator(acc);
        observer[ObserverLike_notify](acc);
        ctx[ContinuationContextLike_yield](delay);
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
}) as ObservableGenerate["generate"];

export default Observable_generate;
