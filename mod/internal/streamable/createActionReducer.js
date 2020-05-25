import { pipe, returns } from "../../functions.js";
import { fromValue, scan, distinctUntilChanged, mergeWith, } from "../../observable.js";
import { createStreamable } from "./streamable.js";
export const createActionReducer = (reducer, initialState, options) => {
    const operator = (src) => {
        const acc = initialState();
        return pipe(src, scan(reducer, returns(acc)), mergeWith(fromValue()(acc)), distinctUntilChanged(options));
    };
    return createStreamable(operator);
};
