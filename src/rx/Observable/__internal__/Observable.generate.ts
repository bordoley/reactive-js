import { Factory, Updater, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
} from "../../../scheduling.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";

const Observable_generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
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
      observer,
      Observer_schedule(continuation, delayStart ? options : none),
    );
  };

  return delay > 0
    ? Runnable_create(onSubscribe)
    : Enumerable_create(onSubscribe);
};

export default Observable_generate;
