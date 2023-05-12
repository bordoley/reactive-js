/// <reference types="./Streamable.createEventHandler.d.ts" />

import DeferredObservable_exhaustMap from "../../DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_mergeMap from "../../DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_switchMap from "../../DeferredObservable/__internal__/DeferredObservable.switchMap.js";
import Observable_endWith from "../../Observable/__internal__/Observable.endWith.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_startWith from "../../Observable/__internal__/Observable.startWith.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import { compose, pipe } from "../../functions.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createEventHandler = ((op, options = {}) => {
    const { mode } = options;
    return Streamable_create(compose(mode === "switching"
        ? DeferredObservable_switchMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)))
        : mode === "blocking"
            ? DeferredObservable_exhaustMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)))
            : DeferredObservable_mergeMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)), { ...options, concurrency: 1 }), Observable_mergeWith(pipe(false, Optional_toRunnable()))));
});
export default Streamable_createEventHandler;
