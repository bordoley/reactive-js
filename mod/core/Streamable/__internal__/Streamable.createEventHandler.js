/// <reference types="./Streamable.createEventHandler.d.ts" />

import Observable_endWith from "../../../core/Observable/__internal__/Observable.endWith.js";
import Observable_ignoreElements from "../../../core/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../core/Observable/__internal__/Observable.mergeWith.js";
import Observable_startWith from "../../../core/Observable/__internal__/Observable.startWith.js";
import Optional_toObservable from "../../../core/Optional/__internal__/Optional.toObservable.js";
import { compose, pipe } from "../../../functions.js";
import DeferredObservable_exhaustMap from "../../DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_mergeMap from "../../DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_switchMap from "../../DeferredObservable/__internal__/DeferredObservable.switchMap.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createEventHandler = ((op, options = {}) => {
    const { mode } = options;
    return Streamable_create(compose(mode === "switching"
        ? DeferredObservable_switchMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)))
        : mode === "blocking"
            ? DeferredObservable_exhaustMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)))
            : DeferredObservable_mergeMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)), { ...options, concurrency: 1 }), Observable_mergeWith(pipe(false, Optional_toObservable()))));
});
export default Streamable_createEventHandler;
