/// <reference types="./Observable.fromObservable.d.ts" />

import * as Computation from "../../Computation.js";
import Observable_multicast from "./Observable.multicast.js";
import Observable_subscribeOn from "./Observable.subscribeOn.js";
// Intentionally convoluted implementation to match the spec of the type signature.
const Observable_fromObservable = ((scheduler, options) => obs => Computation.isMulticasted(obs)
    ? Observable_multicast(scheduler, options)(obs)
    : Observable_subscribeOn(scheduler, options)(obs));
export default Observable_fromObservable;
