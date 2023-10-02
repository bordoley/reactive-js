/// <reference types="./Observable.merge.d.ts" />

import Observable_mergeMany from "./Observable.mergeMany.js";
const Observable_merge = ((...observables) => Observable_mergeMany(observables));
export default Observable_merge;
