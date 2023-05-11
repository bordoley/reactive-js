/// <reference types="./SharedObservable.mergeAll.d.ts" />

import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import SharedObservable_lift from "./SharedObservable.lift.js";
const SharedObservable_mergeAll = 
/*@__PURE__*/ Observable_mergeAll(SharedObservable_lift);
export default SharedObservable_mergeAll;
