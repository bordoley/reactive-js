/// <reference types="./Observable.flatMapAsync.d.ts" />

import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
const Observable_flatMapAsync = (f) => Observable_concatMap((a) => Observable_fromAsyncFactory(abortSignal => f(a, abortSignal)));
export default Observable_flatMapAsync;
