import { CatchError } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservable_catchError from "../HigherOrderObservable/HigherOrderObservable.catchError";
import EnumerableObservable_lift from "./EnumerableObservable.lift";

const EnumerableObservable_catchError: CatchError<EnumerableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableObservableLike>(
    EnumerableObservable_lift,
  ) as CatchError<EnumerableObservableLike>["catchError"];

export default EnumerableObservable_catchError;
