import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import { RunnableContainer, StatefulContainers } from "../../containers.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_catchError: StatefulContainers.TypeClass<RunnableContainer>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<RunnableContainer>(
    Runnable_lift,
  );

export default Runnable_catchError;
