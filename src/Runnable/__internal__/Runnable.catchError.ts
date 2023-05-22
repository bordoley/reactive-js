import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import Observable_liftRunnableUpperBounded from "../../Observable/__internal__/Observable.liftRunnableUpperBounded.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_catchError: Runnable.Signature["catchError"] =
  /*@__PURE__*/ Observable_catchErrorWithFallback<Runnable.Type, Runnable.Type>(
    Observable_liftRunnableUpperBounded,
  );

export default Runnable_catchError;
