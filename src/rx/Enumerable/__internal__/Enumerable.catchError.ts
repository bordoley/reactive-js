import { CatchError } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
import HigherOrderObservable_catchError from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";

const Enumerable_catchError: CatchError<EnumerableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableLike>(
    EnumerableObservable_lift,
  ) as CatchError<EnumerableLike>["catchError"];

export default Enumerable_catchError;
