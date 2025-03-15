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
  Optional,
  SideEffect1,
  error,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as DelegatingObserver from "../../../utils/__internal__/DelegatingObserver.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";

const Observable_catchError: Observable.Signature["catchError"] = (<T>(
  errorHandler: SideEffect1<Error> | Function1<Error, ObservableLike<T>>,
  options?: {
    readonly innerType?: HigherOrderInnerComputationLike;
  },
) =>
  pipe(
    (delegate: ObserverLike<T>) =>
      pipe(
        DelegatingObserver.createNonDisposing(delegate),
        Disposable.addToContainer(delegate),
        DisposableContainer.onError(err => {
          let action: Optional<ObservableLike<T>> = none;
          try {
            action = errorHandler(err) as Optional<ObservableLike<T>>;
          } catch (e) {
            delegate[DisposableLike_dispose](error([error(e), err]));
          }

          if (isSome(action)) {
            action[ObservableLike_observe](delegate);
          } else {
            delegate[SinkLike_complete]();
          }
        }),
      ),
    Observable_lift({
      [ObservableLift_isStateless]: false,
      [ComputationLike_isDeferred]: Computation.isDeferred(
        options?.innerType ?? {},
      ),
      [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
      [ComputationLike_isSynchronous]: Computation.isSynchronous(
        options?.innerType ?? {},
      ),
    }),
  )) as Observable.Signature["catchError"];

export default Observable_catchError;
