import {
  HigherOrderInnerComputationLike,
  ObservableLike,
} from "../../../computations.js";
import { Function1, SideEffect1 } from "../../../functions.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Observable_catchError: Observable.Signature["catchError"] = (<T>(
  errorHandler: SideEffect1<Error> | Function1<Error, ObservableLike<T>>,
  options?: {
    readonly innerType?: HigherOrderInnerComputationLike;
  },
) =>
  DeferredSource.catchError(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing<T>,
    errorHandler,
    options,
  )) as Observable.Signature["catchError"];

export default Observable_catchError;
