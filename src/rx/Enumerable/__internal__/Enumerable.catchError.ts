import { CatchError, EnumerableContainer } from "../../../rx.js";
import HigherOrderObservable_catchError from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";

const Enumerable_catchError: CatchError<EnumerableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableContainer>(
    EnumerableObservable_lift,
  ) as CatchError<EnumerableContainer>["catchError"];

export default Enumerable_catchError;
