/// <reference types="./Observable.zipLatest.d.ts" />

import Observable_latest from "./Observable.latest.js";
const Observable_zipLatest = (...observables) => Observable_latest(observables, 2);
export default Observable_zipLatest;
