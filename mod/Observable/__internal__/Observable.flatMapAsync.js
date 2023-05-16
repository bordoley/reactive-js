/// <reference types="./Observable.flatMapAsync.d.ts" />

import DeferredObservable_concatMap from "../../DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import MulticastObservable_concatMap from "../../MulticastObservable/__internal__/MulticastObservable.concatMap.js";
import { pipe } from "../../functions.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";
import Observable_isDeferredObservable from "./Observable.isDeferredObservable.js";
const Observable_flatMapAsync = ((f) => {
    const mapper = (a) => pipe((abortSignal) => f(a, abortSignal), Observable_fromAsyncFactory());
    return (observable) => Observable_isDeferredObservable(observable)
        ? pipe(observable, DeferredObservable_concatMap(mapper))
        : pipe(observable, MulticastObservable_concatMap(mapper));
});
export default Observable_flatMapAsync;
