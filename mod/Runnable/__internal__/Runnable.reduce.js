/// <reference types="./Runnable.reduce.d.ts" />

import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import { pipe } from "../../functions.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_reduce = (reducer, initialValue) => (runnable) => {
    let acc = initialValue();
    pipe(runnable, Observable_forEach((next) => {
        acc = reducer(acc, next);
    }), Runnable_run());
    return acc;
};
export default Runnable_reduce;
