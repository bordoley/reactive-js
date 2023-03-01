/// <reference types="./Runnable.mergeAll.d.ts" />

import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_mergeAll = /*@__PURE__*/ HigherOrderObservable_mergeAll(Runnable_lift);
export default Runnable_mergeAll;
