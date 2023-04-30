import {
  CatchError,
  ObservableContainerLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import Observable_lift from "./Observable.lift.js";

const Observable_catchError: CatchError<ObservableContainerLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<ObservableContainerLike>(
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }),
  ) as CatchError<ObservableContainerLike>["catchError"];

export default Observable_catchError;
