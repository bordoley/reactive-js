import { CatchError } from "../../../containers.js";
import { RunnableLike } from "../../../rx.js";
import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_catchError: CatchError<RunnableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<RunnableLike>(Runnable_lift);

export default Runnable_catchError;
