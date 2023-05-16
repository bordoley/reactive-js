/// <reference types="./MulticastObservable.mergeAll.d.ts" />

import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import MulticastObservable_lift from "./MulticastObservable.lift.js";
const MulticastObservable_mergeAll = 
/*@__PURE__*/ Observable_mergeAll(MulticastObservable_lift);
export default MulticastObservable_mergeAll;
