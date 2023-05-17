import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import {
  Function1,
  bindMethod,
  error,
  pipe,
} from "../../functions.js";
import {
  ContainerOf,
  ContainerOperator,
  DeferredObservableContainer,
  DisposableLike_dispose,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";

const Observable_catchErrorWithFallback = <
  C extends Observable.Type,
  CInner extends DeferredObservableContainer,
>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
) => {
  const createCatchErrorObserver =
    <T>(errorHandler: Function1<Error, ContainerOf<CInner, T>>) =>
    (delegate: ObserverLike<T>) =>
      pipe(
        Observer_createWithDelegate<T>(delegate),
        Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)),
        Disposable_onError((err: Error) => {
          try {
            const next = errorHandler(err);
            next[ObservableLike_observe](delegate);
          } catch (e) {
            delegate[DisposableLike_dispose](error([e, err]));
          }
        }),
      );

  return <T>(errorHandler: Function1<Error, ContainerOf<CInner, T>>) =>
    pipe(errorHandler, createCatchErrorObserver, lift);
};

export default Observable_catchErrorWithFallback;
