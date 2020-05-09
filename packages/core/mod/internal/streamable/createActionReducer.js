import { pipe, returns } from "../../functions.js";
import { fromValue, scan, distinctUntilChanged, } from "../../observable.js";
import { createStreamable } from "./streamable.js";
import { merge } from "../observable/merge.js";
export const createActionReducer = (reducer, initialState, equals) => {
    const operator = (src) => {
        const acc = initialState();
        return pipe(merge(fromValue()(acc), pipe(src, scan(reducer, returns(acc)))), distinctUntilChanged(equals));
    };
    return createStreamable(operator);
};
