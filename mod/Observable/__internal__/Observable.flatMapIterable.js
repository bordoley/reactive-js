/// <reference types="./Observable.flatMapIterable.d.ts" />

import DeferredObservable_concatMap from "../../DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import Enumerable_concatMap from "../../Enumerable/__internal__/Enumerable.concatMap.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import MulticastObservable_concatMap from "../../MulticastObservable/__internal__/MulticastObservable.concatMap.js";
import Runnable_concatMap from "../../Runnable/__internal__/Runnable.concatMap.js";
import { compose, pipe, raiseWithDebugMessage, } from "../../functions.js";
import Observable_isDeferredObservable from "./Observable.isDeferredObservable.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isMulticastObservable from "./Observable.isMulticastObservable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
const Observable_flatMapIterable = ((selector) => {
    const mapper = compose(selector, Iterable_toObservable());
    return (observable) => Observable_isEnumerable(observable)
        ? pipe(observable, Enumerable_concatMap(mapper))
        : Observable_isRunnable(observable)
            ? pipe(observable, Runnable_concatMap(mapper))
            : Observable_isDeferredObservable(observable)
                ? pipe(observable, DeferredObservable_concatMap(mapper))
                : Observable_isMulticastObservable(observable)
                    ? pipe(observable, MulticastObservable_concatMap(mapper))
                    : raiseWithDebugMessage("illegal state");
});
export default Observable_flatMapIterable;
