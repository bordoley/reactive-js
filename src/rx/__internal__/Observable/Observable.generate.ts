import { Factory, Updater, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import Continuation_yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import EnumerableObservable_create from "../EnumerableObservable/EnumerableObservable.create";
import Observer_schedule from "../Observer/Observer.schedule";
import RunnableObservable_create from "../RunnableObservable/RunnableObservable.create";

const Observable_generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const { delayStart = false } = options ?? {};

  const onSink = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    const continuation = () => {
      while (!Disposable_isDisposed(observer)) {
        acc = generator(acc);
        observer[SinkLike_notify](acc);
        Continuation_yield_(options);
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
