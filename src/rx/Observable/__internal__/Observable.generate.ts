import { Factory, Updater, none, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import EnumerableObservable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";

const Observable_generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const { delay = 0, delayStart = false } = options ?? {};

  const onSink = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    const continuation = () => {
      while (!Disposable_isDisposed(observer)) {
        acc = generator(acc);
        observer[SinkLike_notify](acc);
        Continuation__yield(delay);
      }
    };

    pipe(
      observer,
      Observer_schedule(continuation, delayStart ? options : none),
    );
  };

  return hasDelay(options)
    ? Runnable_create(onSink)
    : EnumerableObservable_create(onSink);
};

export default Observable_generate;
