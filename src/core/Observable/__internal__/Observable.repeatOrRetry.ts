import {
  Containers,
  DisposableLike_dispose,
  ObservableContainer,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import {
  bindMethod,
  error,
  isSome,
  partial,
  pipe,
} from "../../../functions.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

type ObservableRepeatOrRetry = <C extends ObservableContainer, T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => Containers.Operator<C, T, T>;

const Observable_repeatOrRetry: ObservableRepeatOrRetry = /*@__PURE__*/ (<
  C extends ObservableContainer,
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
        err = isSome(err) ? error([e, err]) : error(e);
      }

      if (shouldComplete) {
        delegate[DisposableLike_dispose](err);
      } else {
        count++;

        pipe(
          observable,
          Observable_forEach<ObservableContainer, T>(
            bindMethod(delegate, ObserverLike_notify),
          ),
          Observable_subscribeWithConfig(delegate, delegate),
          Disposable_addTo(delegate, { ignoreChildErrors: true }),
          Disposable_onDisposed(doOnDispose),
        );
      }
    };

    return pipe(
      Observer_createWithDelegate(delegate),
      Disposable_addTo(delegate, { ignoreChildErrors: true }),
      Disposable_onDisposed(doOnDispose),
    );
  };

  return ((shouldRepeat: (count: number, error?: Error) => boolean) =>
    (observable: Containers.Of<C, T>) => {
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
