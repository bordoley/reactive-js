/// <reference types="./Observable.fromObservable.d.ts" />

import Observable_subscribeOn from "./Observable.subscribeOn.js";
// Intentionally convoluted implementation to match the spec of the type signature.
const Observable_fromObservable = ((scheduler) => obs => Observable_subscribeOn(scheduler)(obs));
export default Observable_fromObservable;
