/// <reference types="./Streamable.eventHandler.d.ts" />

import { compose, pipe } from "../../../functions.js";
import * as Observable from "../../Observable.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_eventHandler = ((op, options = {}) => {
    const { mode } = options;
    const boundedOP = compose(op, Observable.ignoreElements(), Observable.startWith(true), Observable.endWith(false));
    return Streamable_create(compose(mode === "switching"
        ? Observable.switchMap(boundedOP, {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        })
        : mode === "blocking"
            ? Observable.exhaustMap(boundedOP, {
                innerType: Observable.DeferredObservableWithSideEffectsType,
            })
            : Observable.mergeMap(boundedOP, {
                ...options,
                concurrency: 1,
                innerType: Observable.DeferredObservableWithSideEffectsType,
            }), Observable.mergeWith(pipe(false, Observable.fromValue()))));
});
export default Streamable_eventHandler;
