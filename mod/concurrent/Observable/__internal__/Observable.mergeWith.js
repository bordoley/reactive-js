/// <reference types="./Observable.mergeWith.d.ts" />

import Observable_mergeMany from "./Observable.mergeMany.js";
const Observable_mergeWith = ((...tail) => (fst) => Observable_mergeMany([fst, ...tail]));
export default Observable_mergeWith;
