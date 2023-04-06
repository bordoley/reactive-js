import { CatchError } from "../../../containers.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import Observable_lift from "./Observable.lift.js";

const Observable_catchError: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<ObservableLike>(
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }),
  ) as CatchError<ObservableLike>["catchError"];

export default Observable_catchError;
