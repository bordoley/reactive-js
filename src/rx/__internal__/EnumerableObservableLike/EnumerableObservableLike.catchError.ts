import { CatchError } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import HigherOrderObservableLike__catchError from "../HigherOrderObservableLike/HigherOrderObservableLike.catchError";
import EnumerableObservableLike__lift from "./EnumerableObservableLike.lift";

const EnumerableObservableLike__catchError: CatchError<EnumerableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservableLike__catchError<EnumerableObservableLike>(
    EnumerableObservableLike__lift,
  ) as CatchError<EnumerableObservableLike>["catchError"];

export default EnumerableObservableLike__catchError;
