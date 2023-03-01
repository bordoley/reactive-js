/// <reference types="./Runnable.switchAll.d.ts" />

import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(Runnable_lift);
export default Runnable_switchAll;
