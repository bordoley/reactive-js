import { ContainerOperator } from "../../../containers";
import { error, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Sink_notifySink from "../../Sink/__internal__/Sink.notifySink";
import Observable_forEach from "./Observable.forEach";
import Observable_lift from "./Observable.lift";
import Observable_subscribe from "./Observable.subscribe";

const Observable_repeatOrRetry: <T>(
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
        pipe(delegate, Disposable_dispose(err));
      } else {
        count++;

        pipe(
          observable,
          Observable_forEach(Sink_notifySink(delegate)),
          Observable_subscribe(Observer_getScheduler(delegate)),
          Disposable_addToIgnoringChildErrors(delegate),
          Disposable_onDisposed(doOnDispose),
        );
      }
    };

    return pipe(
      Observer_createWithDelegate(delegate),
      Disposable_addToIgnoringChildErrors(delegate),
      Disposable_onDisposed(doOnDispose),
    );
  };

  return <T>(shouldRepeat: (count: number, error?: Error) => boolean) =>
    (observable: ObservableLike<T>) => {
      const operator = pipe(
        createRepeatObserver,
        partial(observable, shouldRepeat),
      );
      return pipe(observable, Observable_lift(true, true)(operator));
    };
})();

export default Observable_repeatOrRetry;
