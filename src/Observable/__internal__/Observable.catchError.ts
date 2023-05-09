import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import { ObservableContainer } from "../../containers.js";
import { Function1 } from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../types.js";
import Observable_lift from "./Observable.lift.js";

const Observable_catchError: ObservableContainer.TypeClass["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<ObservableContainer.Type>(
    // FIXME: should just be DeferredObservable_lift
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }) as <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ) => Function1<ObservableLike<TA>, ObservableLike<TB>>,
  ) as ObservableContainer.TypeClass["catchError"];

export default Observable_catchError;
