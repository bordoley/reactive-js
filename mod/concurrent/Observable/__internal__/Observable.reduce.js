/// <reference types="./Observable.reduce.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
const Observable_reduce = (reducer, initialValue) => (runnable) => {
    let acc = initialValue();
    pipe(runnable, Observable_forEach((next) => {
        acc = reducer(acc, next);
    }), Observable_run());
    return acc;
};
export default Observable_reduce;
