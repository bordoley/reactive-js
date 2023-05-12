import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_switchAll: Runnable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_switchAll<Runnable.Type, Runnable.Type>(
    Runnable_lift,
  );

export default Runnable_switchAll;
