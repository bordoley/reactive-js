/// <reference types="./Observable.concatWith.d.ts" />

import Observable_concatMany from "./Observable.concatMany.js";
const Observable_concatWith = ((...tail) => (fst) => Observable_concatMany([
    fst,
    ...tail,
]));
export default Observable_concatWith;
