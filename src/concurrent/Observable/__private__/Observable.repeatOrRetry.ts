import {
  DeferredObservableLike,
  ObservableLike,
  ObserverLike,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  bindMethod,
  error,
  isSome,
  partial,
  pipe,
} from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_liftPure from "./Observable.liftPure.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

type ObservableRepeatOrRetry = <T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => Observable.DeferredObservableOperator<T, T>;

const Observable_repeatOrRetry: ObservableRepeatOrRetry = /*@__PURE__*/ (<
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
          Disposable.addTo(delegate, { ignoreChildErrors: true }),
          Disposable.onDisposed(doOnDispose),
        );
      }
    };

    return pipe(
      Observer_createWithDelegate(delegate),
      Disposable.addTo(delegate, { ignoreChildErrors: true }),
      Disposable.onDisposed(doOnDispose),
    );
  };

  return ((shouldRepeat: (count: number, error?: Error) => boolean) =>
    (observable: DeferredObservableLike<T>) =>
      Observable_liftPure(
        pipe(createRepeatObserver, partial(observable, shouldRepeat)),
      )(observable)) as ObservableRepeatOrRetry;
})();

export default Observable_repeatOrRetry;
