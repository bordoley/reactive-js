import { Factory, Updater, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import Continuation$yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import EnumerableObservable$create from "../EnumerableObservable/EnumerableObservable.create";
import Observer$schedule from "../Observer/Observer.schedule";
import RunnableObservable$create from "../RunnableObservable/RunnableObservable.create";

const Observable$generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const { delayStart = false } = options ?? {};

  const onSink = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    const continuation = () => {
      while (!Disposable$isDisposed(observer)) {
        acc = generator(acc);
        observer[SinkLike_notify](acc);
        Continuation$yield_(options);
      }
    };

    pipe(
      observer,
      Observer$schedule(continuation, delayStart ? options : none),
    );
  };

  return hasDelay(options)
    ? RunnableObservable$create(onSink)
    : EnumerableObservable$create(onSink);
};

export default Observable$generate;
