/// <reference types="./Streamable.eventHandler.d.ts" />

import { compose, pipe } from "../../../functions.js";
import * as Observable from "../../Observable.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_eventHandler = ((op, options = {}) => {
    const { mode } = options;
    return Streamable_create(compose(mode === "switching"
        ? Observable.switchMap(compose(op, Observable.ignoreElements(), Observable.startWith(true), Observable.endWith(false)), { innerType: Observable.DeferredObservableWithSideEffectsType })
        : mode === "blocking"
            ? Observable.exhaustMap(compose(op, Observable.ignoreElements(), Observable.startWith(true), Observable.endWith(false)), { innerType: Observable.DeferredObservableWithSideEffectsType })
            : Observable.mergeMap(compose(op, Observable.ignoreElements(), Observable.startWith(true), Observable.endWith(false)), {
                ...options,
                concurrency: 1,
                innerType: Observable.DeferredObservableWithSideEffectsType,
            }), Observable.mergeWith(pipe(false, Observable.fromValue()))));
});
export default Streamable_eventHandler;
