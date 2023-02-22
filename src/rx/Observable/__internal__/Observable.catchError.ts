import { CatchError } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import HigherOrderObservable_catchError from "../../__internal__/HigherOrderObservable/HigherOrderObservable.catchError.js";
import Observable_lift from "./Observable.lift.js";

const Observable_catchError: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<ObservableLike>(
    Observable_lift(),
  ) as CatchError<ObservableLike>["catchError"];

export default Observable_catchError;
