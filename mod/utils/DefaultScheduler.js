/// <reference types="./DefaultScheduler.d.ts" />

import { isSome, none, raiseIfNone } from "../functions.js";
import { DisposableLike_dispose, } from "../utils.js";
let globalDefaultScheduler = none;
export const set = (scheduler) => {
    const oldGlobalScheduler = globalDefaultScheduler;
    if (isSome(oldGlobalScheduler)) {
        oldGlobalScheduler[DisposableLike_dispose]();
    }
    globalDefaultScheduler = scheduler;
    return globalDefaultScheduler;
};
export const get = () => {
    raiseIfNone(globalDefaultScheduler, "The DefaultScheduler has not been set.");
    return globalDefaultScheduler;
};
export const getOrNone = () => globalDefaultScheduler;
