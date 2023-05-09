import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import { Factory, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../types.js";
import Runnable_create from "./Runnable.create.js";

interface RunnableFromEnumeratorFactory {
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
  ): EnumerableLike<T>;
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
    options?: {
      readonly delay: number;
      readonly delayStart?: boolean;
    },
  ): RunnableLike<T>;
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
    options: unknown,
  ): RunnableLike<T>;
}
const Runnable_fromEnumeratorFactory: RunnableFromEnumeratorFactory["fromEnumeratorFactory"] =
  (<T>(
    factory: Factory<EnumeratorLike<T>>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): ObservableLike<T> => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSubscribe = (observer: ObserverLike<T>) => {
      const enumerator = factory();

      const continuation = (scheduler: SchedulerLike) => {
        while (!observer[DisposableLike_isDisposed]) {
          if (enumerator[EnumeratorLike_move]()) {
            observer[ObserverLike_notify](enumerator[EnumeratorLike_current]);
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
    };

    const retval: ObservableLike<T> =
      delay > 0 ? Runnable_create(onSubscribe) : Enumerable_create(onSubscribe);

    return retval;
  }) as RunnableFromEnumeratorFactory["fromEnumeratorFactory"];

export default Runnable_fromEnumeratorFactory;
