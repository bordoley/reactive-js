/// <reference types="./Streamable.createEventHandler.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { compose, pipe } from "../../../functions.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaustMap from "../../../rx/Observable/__internal__/Observable.exhaustMap.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createEventHandler = ((op, options = {}) => {
    const { mode } = options;
    return Streamable_create(compose(mode === "switching"
        ? Observable_switchMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)))
        : mode === "blocking"
            ? Observable_exhaustMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)))
            : Observable_mergeMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false)), { ...options, concurrency: 1 }), Observable_mergeWith(pipe(false, Optional_toObservable()))));
});
export default Streamable_createEventHandler;
