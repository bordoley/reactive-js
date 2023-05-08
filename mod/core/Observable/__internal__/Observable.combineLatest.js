/// <reference types="./Observable.combineLatest.d.ts" />

import Observable_latest from "./Observable.latest.js";
const Observable_combineLatest = (...observables) => Observable_latest(observables, 1);
export default Observable_combineLatest;
