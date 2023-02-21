import { CatchError } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
import HigherOrderObservable_catchError from "../../__internal__/HigherOrderObservable/HigherOrderObservable.catchError.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";

const RunnableObservable_catchError: CatchError<RunnableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<RunnableObservableLike>(
    RunnableObservable_lift,
  );

export default RunnableObservable_catchError;
