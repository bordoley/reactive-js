import { CatchError, RunnableContainerLike } from "../../../rx.js";
import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_catchError: CatchError<RunnableContainerLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<RunnableContainerLike>(
    Runnable_lift,
  );

export default Runnable_catchError;
