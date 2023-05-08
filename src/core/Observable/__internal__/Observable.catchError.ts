import {
  ObservableContainer,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainers,
} from "../../../core.js";
import { Function1 } from "../../../functions.js";
import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import Observable_lift from "./Observable.lift.js";

const Observable_catchError: ReactiveContainers.TypeClass<ObservableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<ObservableContainer>(
    // FIXME: should just be DeferredObservable_lift
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }) as <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ) => Function1<ObservableLike<TA>, ObservableLike<TB>>,
  ) as ReactiveContainers.TypeClass<ObservableContainer>["catchError"];

export default Observable_catchError;
