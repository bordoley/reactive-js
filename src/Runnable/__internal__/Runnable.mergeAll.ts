import Observable_liftRunnableUpperBounded from "../../Observable/__internal__/Observable.liftRunnableUpperBounded.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_mergeAll: Runnable.Signature["mergeAll"] =
  /*@__PURE__*/ Observable_mergeAll<Runnable.Type, Runnable.Type>(
    Observable_liftRunnableUpperBounded,
  );

export default Runnable_mergeAll;
