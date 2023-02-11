import { Factory, Updater, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { __yield } from "../../../scheduling/Continuation/effects";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import EnumerableObservable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule";
import RunnableObservable_create from "../../RunnableObservable/__internal__/RunnableObservable.create";

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
        __yield(delay);
      }
    };

    pipe(
      observer,
      Observer_schedule(continuation, delayStart ? options : none),
    );
  };

  return hasDelay(options)
    ? RunnableObservable_create(onSink)
    : EnumerableObservable_create(onSink);
};

export default Observable_generate;
