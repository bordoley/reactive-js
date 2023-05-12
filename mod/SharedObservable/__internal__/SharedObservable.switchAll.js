/// <reference types="./SharedObservable.switchAll.d.ts" />

import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import SharedObservable_lift from "./SharedObservable.lift.js";
const SharedObservable_switchAll = 
/*@__PURE__*/ Observable_switchAll(SharedObservable_lift);
export default SharedObservable_switchAll;
