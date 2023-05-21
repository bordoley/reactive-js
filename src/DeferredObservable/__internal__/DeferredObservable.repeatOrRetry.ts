import type * as DeferredObservable from "../../DeferredObservable.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_liftEnumerableUpperBounded from "../../Observable/__internal__/Observable.liftEnumerableUpperBounded.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { bindMethod, error, isSome, partial, pipe } from "../../functions.js";
import {
  ContainerOf,
  DisposableLike_dispose,
  ObservableLike,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";

type DeferredObservableRepeatOrRetry = <T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => DeferredObservable.DeferredObservableOperator<T, T>;

const DeferredObservable_repeatOrRetry: DeferredObservableRepeatOrRetry =
  /*@__PURE__*/ (<C extends DeferredObservable.Type, T>() => {
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
          err = isSome(err) ? error([error(e), err]) : error(e);
        }

        if (shouldComplete) {
          delegate[DisposableLike_dispose](err);
        } else {
          count++;

          pipe(
            observable,
            Observable_forEach(bindMethod(delegate, SinkLike_notify)),
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
      (observable: ContainerOf<C, T>) => {
        const operator = pipe(
          createRepeatObserver,
          partial(observable, shouldRepeat),
        );
        return pipe(
          observable,
          Observable_liftEnumerableUpperBounded(operator),
        );
      }) as DeferredObservableRepeatOrRetry;
  })();

export default DeferredObservable_repeatOrRetry;
