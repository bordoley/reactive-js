import { CatchError } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservable_catchError from "../HigherOrderObservable/HigherOrderObservable.catchError";
import Observable_lift from "./Observable.lift";

const Observable_catchError: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<ObservableLike>(
    Observable_lift(),
  ) as CatchError<ObservableLike>["catchError"];

export default Observable_catchError;
