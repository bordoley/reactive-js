import { CatchError } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import HigherOrderObservable_catchError from "../../__internal__/HigherOrderObservable/HigherOrderObservable.catchError";
import RunnableObservable_lift from "./RunnableObservable.lift";

const RunnableObservable_catchError: CatchError<RunnableObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservable_catchError<RunnableObservableLike>(
    RunnableObservable_lift,
  ) as CatchError<RunnableObservableLike>["catchError"];

export default RunnableObservable_catchError;
