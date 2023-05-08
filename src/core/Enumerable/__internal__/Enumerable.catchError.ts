import { EnumerableContainer, ReactiveContainer } from "../../../core.js";
import HigherOrderObservable_catchError from "../../../core/HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";

const Enumerable_catchError: ReactiveContainer.TypeClass<EnumerableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableContainer>(
    EnumerableObservable_lift,
  ) as ReactiveContainer.TypeClass<EnumerableContainer>["catchError"];

export default Enumerable_catchError;
