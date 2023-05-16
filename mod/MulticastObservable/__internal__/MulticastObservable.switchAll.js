/// <reference types="./MulticastObservable.switchAll.d.ts" />

import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import MulticastObservable_lift from "./MulticastObservable.lift.js";
const MulticastObservable_switchAll = 
/*@__PURE__*/ Observable_switchAll(MulticastObservable_lift);
export default MulticastObservable_switchAll;
