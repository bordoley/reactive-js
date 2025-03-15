/// <reference types="./Observable.fromObservable.d.ts" />

import * as Computation from "../../Computation.js";
import Observable_multicast from "./Observable.multicast.js";
import Observable_subscribeOn from "./Observable.subscribeOn.js";
// Intentionally convoluted implementation to match the spec of the type signature.
const Observable_fromObservable = ((scheduler) => obs => Computation.isMulticasted(obs)
    ? Observable_multicast(scheduler)(obs)
    : Observable_subscribeOn(scheduler)(obs));
export default Observable_fromObservable;
