/// <reference types="./RunnableObservable.switchAll.d.ts" />

import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";
const RunnableObservable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(RunnableObservable_lift);
export default RunnableObservable_switchAll;
