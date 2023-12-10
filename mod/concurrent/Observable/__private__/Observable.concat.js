/// <reference types="./Observable.concat.d.ts" />

import Observable_concatMany from "./Observable.concatMany.js";
const Observable_concat = ((
// typed to work around type overrides
...observables) => Observable_concatMany(observables));
export default Observable_concat;
