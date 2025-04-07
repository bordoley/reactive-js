import {
  ComputationLike_isPure,
  ObservableLike,
} from "../../../computations.js";
import { Function1, SideEffect1 } from "../../../functions.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Observable_catchError: Observable.Signature["catchError"] = (<T>(
  errorHandler: SideEffect1<Error> | Function1<Error, ObservableLike<T>>,
  options?: {
    [ComputationLike_isPure]?: boolean;
  },
) =>
  DeferredEventSource.catchError<T, ObservableLike<T>, ObserverLike<T>>(
    Observer.createDelegatingCatchError<T>,
    errorHandler,
    options,
  )) as Observable.Signature["catchError"];

export default Observable_catchError;
