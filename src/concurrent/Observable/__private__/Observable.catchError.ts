import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1, bindMethod, error, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const Observable_catchError: Observable.Signature["catchError"] =
  /*@__PURE__*/ (<T>() => {
    const createCatchErrorObserver =
      (errorHandler: SideEffect1<Error>) => (delegate: ObserverLike<T>) =>
        pipe(
          Observer_createWithDelegate<T>(delegate),
          DisposableContainer.onComplete(
            bindMethod(delegate, DisposableLike_dispose),
          ),
          DisposableContainer.onError((err: Error) => {
            try {
              errorHandler(err);
              delegate[DisposableLike_dispose]();
            } catch (e) {
              delegate[DisposableLike_dispose](error([error(e), err]));
            }
          }),
        );

    return (errorHandler: SideEffect1<Error>) =>
      Observable_liftPureDeferred(createCatchErrorObserver(errorHandler));
  })();

export default Observable_catchError;
