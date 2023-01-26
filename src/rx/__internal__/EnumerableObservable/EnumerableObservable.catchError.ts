import { CatchError } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservable$catchError from "../HigherOrderObservable/HigherOrderObservable.catchError";
import EnumerableObservable$lift from "./EnumerableObservable.lift";

const EnumerableObservable$catchError: CatchError<EnumerableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable$catchError<EnumerableObservableLike>(
    EnumerableObservable$lift,
  ) as CatchError<EnumerableObservableLike>["catchError"];

export default EnumerableObservable$catchError;
