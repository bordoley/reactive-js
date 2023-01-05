import { CatchError } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservableLike__catchError from "../HigherOrderObservableLike/HigherOrderObservableLike.catchError";
import RunnableObservableLike__lift from "./RunnableObservableLike.lift";

const RunnableObservableLike__catchError: CatchError<RunnableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservableLike__catchError<RunnableObservableLike>(
    RunnableObservableLike__lift,
  ) as CatchError<RunnableObservableLike>["catchError"];

export default RunnableObservableLike__catchError;
