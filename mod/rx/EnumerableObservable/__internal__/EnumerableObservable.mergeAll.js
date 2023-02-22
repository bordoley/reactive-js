/// <reference types="./EnumerableObservable.mergeAll.d.ts" />

import HigherOrderObservable_mergeAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.mergeAll.js";
import EnumerableObservable_lift from "./EnumerableObservable.lift.js";
const EnumerableObservable_mergeAll = 
/*@__PURE__*/ HigherOrderObservable_mergeAll(EnumerableObservable_lift);
export default EnumerableObservable_mergeAll;
