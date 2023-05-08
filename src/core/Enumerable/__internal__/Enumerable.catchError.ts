import { EnumerableContainer, ReactiveContainers } from "../../../core.js";
import HigherOrderObservable_catchError from "../../../core/HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";

const Enumerable_catchError: ReactiveContainers.TypeClass<EnumerableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableContainer>(
    EnumerableObservable_lift,
  ) as ReactiveContainers.TypeClass<EnumerableContainer>["catchError"];

export default Enumerable_catchError;
