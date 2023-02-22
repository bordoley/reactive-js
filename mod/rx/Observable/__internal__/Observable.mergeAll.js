/// <reference types="./Observable.mergeAll.d.ts" />

import HigherOrderObservable_mergeAll from "../../__internal__/HigherOrderObservable/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";
const Observable_mergeAll = /*@__PURE__*/ HigherOrderObservable_mergeAll(Observable_lift());
export default Observable_mergeAll;
