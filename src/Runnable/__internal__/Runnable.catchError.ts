import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_catchError: RunnableContainer.TypeClass["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<RunnableContainer.Type>(
    Runnable_lift,
  );

export default Runnable_catchError;
