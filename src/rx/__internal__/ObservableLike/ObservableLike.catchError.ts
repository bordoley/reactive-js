import { CatchError } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservableLike__catchError from "../HigherOrderObservableLike/HigherOrderObservableLike.catchError";
import ObservableLike__lift from "./ObservableLike.lift";

const ObservableLike__catchError: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ HigherOrderObservableLike__catchError<ObservableLike>(
    ObservableLike__lift(),
  ) as CatchError<ObservableLike>["catchError"];

export default ObservableLike__catchError;
