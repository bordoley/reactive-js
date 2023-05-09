import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import { EnumerableContainer, StatefulContainers } from "../../types.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";

const Enumerable_catchError: StatefulContainers.TypeClass<EnumerableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableContainer>(
    EnumerableObservable_lift,
  ) as StatefulContainers.TypeClass<EnumerableContainer>["catchError"];

export default Enumerable_catchError;
