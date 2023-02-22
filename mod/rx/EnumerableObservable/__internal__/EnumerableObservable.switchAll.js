/// <reference types="./EnumerableObservable.switchAll.d.ts" />

import HigherOrderObservable_switchAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.switchAll.js";
import EnumerableObservable_lift from "./EnumerableObservable.lift.js";
const EnumerableObservable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(EnumerableObservable_lift);
export default EnumerableObservable_switchAll;
