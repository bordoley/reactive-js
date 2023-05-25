import Observable_liftRunnableBoundedPureObservableOperator from "../../Observable/__internal__/Observable.liftRunnableBoundedPureObservableOperator.js";
import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import type * as Runnable from "../../Runnable.js";
import { returns } from "../../functions.js";

const Runnable_switchAll: Runnable.Signature["switchAll"] =
  /*@__PURE__*/ returns(
    Observable_liftRunnableBoundedPureObservableOperator(
      Observer_createSwitchAllObserver,
    ),
  );
export default Runnable_switchAll;
