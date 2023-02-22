/// <reference types="./Observable.merge.d.ts" />

import Observable_mergeObservables from "./Observable.mergeObservables.js";
const Observable_merge = (...observables) => Observable_mergeObservables(observables);
export default Observable_merge;
