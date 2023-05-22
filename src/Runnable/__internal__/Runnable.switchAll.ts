import Observable_liftRunnableUpperBounded from "../../Observable/__internal__/Observable.liftRunnableUpperBounded.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_switchAll: Runnable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_switchAll<Runnable.Type, Runnable.Type>(
    Observable_liftRunnableUpperBounded,
  );

export default Runnable_switchAll;
