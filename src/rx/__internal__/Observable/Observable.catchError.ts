import { CatchError } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservable$catchError from "../HigherOrderObservable/HigherOrderObservable.catchError";
import Observable$lift from "./Observable.lift";

const Observable$catchError: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable$catchError<ObservableLike>(
    Observable$lift(),
  ) as CatchError<ObservableLike>["catchError"];

export default Observable$catchError;
