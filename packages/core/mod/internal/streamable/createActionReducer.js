import { pipe, returns } from "../../functions.js";
import { scan, startWith, distinctUntilChanged, } from "../../observable.js";
import { createStreamable } from "./streamable.js";
export const createActionReducer = (reducer, initialState, equals) => {
    const operator = (src) => {
        const acc = initialState();
        return pipe(src, scan(reducer, returns(acc)), startWith(acc), distinctUntilChanged(equals));
    };
    return createStreamable(operator);
};
