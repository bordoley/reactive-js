import { EnumerableContainer, ReactiveContainer } from "../../../core.js";
import HigherOrderObservable_catchError from "../../../core/HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";

const Enumerable_catchError: ReactiveContainer.CatchError<EnumerableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableContainer>(
    EnumerableObservable_lift,
  ) as ReactiveContainer.CatchError<EnumerableContainer>["catchError"];

export default Enumerable_catchError;
