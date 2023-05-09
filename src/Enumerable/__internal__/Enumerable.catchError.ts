import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import { EnumerableContainer } from "../../containers.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";

const Enumerable_catchError: EnumerableContainer.TypeClass["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<EnumerableContainer.Type>(
    EnumerableObservable_lift,
  ) as EnumerableContainer.TypeClass["catchError"];

export default Enumerable_catchError;
