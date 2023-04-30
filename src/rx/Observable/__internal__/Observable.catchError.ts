import {
  CatchError,
  ObservableContainer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import Observable_lift from "./Observable.lift.js";

const Observable_catchError: CatchError<ObservableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<ObservableContainer>(
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }),
  ) as CatchError<ObservableContainer>["catchError"];

export default Observable_catchError;
