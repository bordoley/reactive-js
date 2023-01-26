import { CatchError } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservable$catchError from "../HigherOrderObservable/HigherOrderObservable.catchError";
import RunnableObservable$lift from "./RunnableObservable.lift";

const RunnableObservable$catchError: CatchError<RunnableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable$catchError<RunnableObservableLike>(
    RunnableObservable$lift,
  ) as CatchError<RunnableObservableLike>["catchError"];

export default RunnableObservable$catchError;
