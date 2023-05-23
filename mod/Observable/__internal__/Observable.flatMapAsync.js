/// <reference types="./Observable.flatMapAsync.d.ts" />

import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import { pipe } from "../../functions.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
const Observable_flatMapAsync = ((f) => {
    const mapper = (a) => pipe((abortSignal) => f(a, abortSignal), Observable_fromAsyncFactory());
    return (observable) => pipe(observable, Observable_concatMap(mapper));
});
export default Observable_flatMapAsync;
