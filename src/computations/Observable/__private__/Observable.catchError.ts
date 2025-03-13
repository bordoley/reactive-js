import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  HigherOrderInnerComputationLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
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
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  QueueableLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";

const Observable_catchError: Observable.Signature["catchError"] =
  /*@__PURE__*/ (<T>() => {
    const createCatchErrorObserver =
      (onErrorHandler: Method1<ObserverLike<T>, Error>) =>
      (delegate: ObserverLike<T>) =>
        pipe(
          Observer_createWithDelegate<T>(delegate),
          DisposableContainer.onComplete(
            bindMethod(delegate, QueueableLike_complete),
          ),
          DisposableContainer.onError(bind(onErrorHandler, delegate)),
        );

    return (
      errorHandler: SideEffect1<Error> | Function1<Error, ObservableLike<T>>,
      options?: {
        readonly innerType?: HigherOrderInnerComputationLike;
      },
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
          this[QueueableLike_complete]();
        }
      }

      return Observable_lift({
        [ObservableLift_isStateless]: false,
        [ComputationLike_isDeferred]: Computation.isDeferred(
          options?.innerType ?? {},
        ),
        [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
        [ComputationLike_isSynchronous]: Computation.isSynchronous(
          options?.innerType ?? {},
        ),
      })(createCatchErrorObserver(onErrorHandler));
    };
  })() as Observable.Signature["catchError"];

export default Observable_catchError;
