/// <reference types="./Streamable.createEventHandler.d.ts" />

import { compose } from "../../../functions.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaustMap from "../../../rx/Observable/__internal__/Observable.exhaustMap.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createEventHandler = ((op, options = {}) => {
    const { mode } = options;
    return Streamable_create(mode === "switching"
        ? Observable_switchMap(compose(op, Observable_ignoreElements()))
        : mode === "blocking"
            ? compose(Observable_exhaustMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false))), Observable_startWith(false))
            : Observable_mergeMap(compose(op, Observable_ignoreElements()), { ...options, concurrency: 1 }));
});
export default Streamable_createEventHandler;
