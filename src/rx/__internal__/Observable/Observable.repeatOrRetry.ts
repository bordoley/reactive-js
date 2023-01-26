import { ContainerOperator } from "../../../containers";
import { error, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Disposable$addToIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Observer$createWithDelegate from "../Observer/Observer.createWithDelegate";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Sink$notifySink from "../Sink/Sink.notifySink";
import Observable$forEach from "./Observable.forEach";
import Observable$lift from "./Observable.lift";
import Observable$subscribe from "./Observable.subscribe";

const Observable$repeatOrRetry: <T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => ContainerOperator<ObservableLike, T, T> = /*@__PURE__*/ (() => {
  const createRepeatObserver = <T>(
    delegate: ObserverLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (count: number, error?: Error) => boolean,
  ) => {
    let count = 1;

    const doOnDispose = (err?: Error) => {
      let shouldComplete = false;
      try {
        shouldComplete = !shouldRepeat(count, err);
      } catch (e) {
        shouldComplete = true;
        err = error([e, err]);
      }

      if (shouldComplete) {
        pipe(delegate, Disposable$dispose(err));
      } else {
        count++;

        pipe(
          observable,
          Observable$forEach(Sink$notifySink(delegate)),
          Observable$subscribe(Observer$getScheduler(delegate)),
          Disposable$addToIgnoringChildErrors(delegate),
          Disposable$onDisposed(doOnDispose),
        );
      }
    };

    return pipe(
      Observer$createWithDelegate(delegate),
      Disposable$addToIgnoringChildErrors(delegate),
      Disposable$onDisposed(doOnDispose),
    );
  };

  return <T>(shouldRepeat: (count: number, error?: Error) => boolean) =>
    (observable: ObservableLike<T>) => {
      const operator = pipe(
        createRepeatObserver,
        partial(observable, shouldRepeat),
      );
      return pipe(observable, Observable$lift(true, true)(operator));
    };
})();

export default Observable$repeatOrRetry;
