import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { SideEffect1, bindMethod, error, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObserverLike } from "../../types.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";

const Observable_catchError: Observable.Signature["catchError"] =
  /*@__PURE__*/ (<T>() => {
    const createCatchErrorObserver =
      (errorHandler: SideEffect1<Error>) => (delegate: ObserverLike<T>) =>
        pipe(
          Observer_createWithDelegate<T>(delegate),
          Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)),
          Disposable_onError((err: Error) => {
            try {
              errorHandler(err);
              delegate[DisposableLike_dispose]();
            } catch (e) {
              delegate[DisposableLike_dispose](error([error(e), err]));
            }
          }),
        );

    return (errorHandler: SideEffect1<Error>) =>
      pipe(
        errorHandler,
        createCatchErrorObserver,
        Observable_liftEnumerableUpperBounded,
      );
  })();

export default Observable_catchError;
