import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import {
  Function1,
  Method1,
  Optional,
  SideEffect1,
  bind,
  bindMethod,
  error,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const Observable_catchError: Observable.Signature["catchError"] =
  /*@__PURE__*/ (<T>() => {
    const createCatchErrorObserver =
      (onErrorHandler: Method1<ObserverLike<T>, Error>) =>
      (delegate: ObserverLike<T>) =>
        pipe(
          Observer_createWithDelegate<T>(delegate),
          DisposableContainer.onComplete(
            bindMethod(delegate, DisposableLike_dispose),
          ),
          DisposableContainer.onError(bind(onErrorHandler, delegate)),
        );

    return (
      errorHandler: SideEffect1<Error> | Function1<Error, ObservableLike<T>>,
    ) => {
      function onErrorHandler(this: ObserverLike<T>, err: Error) {
        let action: Optional<ObservableLike<T>> = none;
        try {
          action = errorHandler(err) as Optional<ObservableLike<T>>;
        } catch (e) {
          this[DisposableLike_dispose](error([error(e), err]));
        }

        if (isSome(action)) {
          action[ObservableLike_observe](this);
        } else {
          this[DisposableLike_dispose]();
        }
      }

      return Observable_liftPureDeferred(
        createCatchErrorObserver(onErrorHandler),
      );
    };
  })();

export default Observable_catchError;
