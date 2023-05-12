/// <reference types="./Observable.zip.d.ts" />

import Observable_zipObservables from "./Observable.zipMany.js";
const Observable_zip = ((...observables) => Observable_zipObservables(observables));
export default Observable_zip;
