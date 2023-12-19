import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1, bindMethod, error, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_catchError: Observable.Signature["catchError"] =
  /*@__PURE__*/ (<T>() => {
    const createCatchErrorObserver =
      (errorHandler: SideEffect1<Error>) => (delegate: ObserverLike<T>) =>
        pipe(
          Observer_createWithDelegate<T>(delegate),
          Disposable.onComplete(bindMethod(delegate, DisposableLike_dispose)),
          Disposable.onError((err: Error) => {
            try {
              errorHandler(err);
              delegate[DisposableLike_dispose]();
            } catch (e) {
              delegate[DisposableLike_dispose](error([error(e), err]));
            }
          }),
        );

    return (errorHandler: SideEffect1<Error>) =>
      Observable_liftPure(createCatchErrorObserver(errorHandler));
  })();

export default Observable_catchError;
