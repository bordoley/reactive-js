import { CatchError } from "../../../containers.js";
import { EnumerableObservableLike } from "../../../rx.js";
import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./EnumerableObservable.lift.js";

const EnumerableObservable_catchError: CatchError<EnumerableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableObservableLike>(
    EnumerableObservable_lift,
  ) as CatchError<EnumerableObservableLike>["catchError"];

export default EnumerableObservable_catchError;
