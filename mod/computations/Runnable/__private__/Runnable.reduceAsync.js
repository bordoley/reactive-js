/// <reference types="./Runnable.reduceAsync.d.ts" />

import { pipe } from "../../../functions.js";
import Runnable_reduce from "./Runnable.reduce.js";
const Runnable_reduceAsync = (reducer, initialValue) => async (runnable) => {
    await Promise.resolve();
    return pipe(runnable, Runnable_reduce(reducer, initialValue));
};
export default Runnable_reduceAsync;
