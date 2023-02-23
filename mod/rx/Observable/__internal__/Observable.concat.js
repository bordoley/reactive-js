/// <reference types="./Observable.concat.d.ts" />

import Observable_concatObservables from "./Observable.concatObservables.js";
const Observable_concat = (...observables) => Observable_concatObservables(observables);
export default Observable_concat;
