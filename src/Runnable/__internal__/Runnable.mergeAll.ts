import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_mergeAll: Runnable.Signature["mergeAll"] =
  /*@__PURE__*/ Observable_mergeAll<Runnable.Type, Runnable.Type>(
    Runnable_lift,
  );

export default Runnable_mergeAll;
