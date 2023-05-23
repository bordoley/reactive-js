import Observable_liftRunnableUpperBounded from "../../Observable/__internal__/Observable.liftRunnableUpperBounded.js";
import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import type * as Runnable from "../../Runnable.js";
import { returns } from "../../functions.js";

const Runnable_switchAll: Runnable.Signature["switchAll"] =
  /*@__PURE__*/ returns(
    Observable_liftRunnableUpperBounded(Observer_createSwitchAllObserver),
  );
export default Runnable_switchAll;
