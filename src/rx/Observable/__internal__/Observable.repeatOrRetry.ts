import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { bindMethod, error, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

type ObservableRepeatOrRetry = <C extends ObservableLike, T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => ContainerOperator<C, T, T>;

const Observable_repeatOrRetry: ObservableRepeatOrRetry = /*@__PURE__*/ (<
  C extends ObservableLike,
  T,
>() => {
  const createRepeatObserver = (
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
        delegate[DisposableLike_dispose](err);
      } else {
        count++;

        pipe(
          observable,
          Observable_forEach<ObservableLike, T>(
            bindMethod(delegate, ObserverLike_notify),
          ),
          Observable_subscribeWithConfig(delegate, delegate),
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

  return ((shouldRepeat: (count: number, error?: Error) => boolean) =>
    (observable: ContainerOf<C, T>) => {
      const operator = pipe(
        createRepeatObserver,
        partial(observable, shouldRepeat),
      );
      return pipe(
        observable,
        Observable_lift<ObservableLike>({
          [ObservableLike_isEnumerable]: true,
          [ObservableLike_isRunnable]: true,
        })(operator),
      );
    }) as ObservableRepeatOrRetry;
})();

export default Observable_repeatOrRetry;
