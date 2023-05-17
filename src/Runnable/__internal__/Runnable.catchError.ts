import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "../../Runnable/__internal__/Runnable.lift.js";

const Runnable_catchError: Runnable.Signature["catchError"] =
  /*@__PURE__*/ Observable_catchErrorWithFallback<Runnable.Type, Runnable.Type>(
    Runnable_lift,
  );

export default Runnable_catchError;
