import type * as DeferredObservable from "../../DeferredObservable.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import {
  Function1,
  Function2,
  bindMethod,
  error,
  pipe,
} from "../../functions.js";
import {
  ContainerOf,
  ContainerOperator,
  DisposableLike_dispose,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";

const Observable_catchErrorWithFallback = <
  C extends Observable.Type,
  CInner extends DeferredObservable.Type,
>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
) => {
  const createCatchErrorObserver =
    <T>(
      errorHandler: Function2<Error, ContainerOf<C, T>, ContainerOf<CInner, T>>,
      causedBy: ContainerOf<C, T>,
    ) =>
    (delegate: ObserverLike<T>) =>
      pipe(
        Observer_createWithDelegate<T>(delegate),
        Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)),
        Disposable_onError((err: Error) => {
          try {
            const next = errorHandler(err, causedBy);
            next[ObservableLike_observe](delegate);
          } catch (e) {
            delegate[DisposableLike_dispose](error([e, err]));
          }
        }),
      );

  return <T>(
      errorHandler: Function2<Error, ContainerOf<C, T>, ContainerOf<CInner, T>>,
    ): ContainerOperator<C, T, T> =>
    (observable: ContainerOf<C, T>) =>
      pipe(
        createCatchErrorObserver(errorHandler, observable),
        lift,
      )(observable);
};

export default Observable_catchErrorWithFallback;
