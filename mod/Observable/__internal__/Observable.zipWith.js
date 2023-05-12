/// <reference types="./Observable.zipWith.d.ts" />

import Observable_zipMany from "./Observable.zipMany.js";
const Observable_zipWith = ((...tail) => (fst) => Observable_zipMany([fst, ...tail]));
export default Observable_zipWith;
