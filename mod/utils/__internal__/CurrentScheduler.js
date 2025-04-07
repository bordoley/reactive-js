/// <reference types="./CurrentScheduler.d.ts" />

import { none } from "../../functions.js";
import * as DefaultScheduler from "../DefaultScheduler.js";
let currentScheduler = none;
export const set = (scheduler) => {
    const oldScheduler = currentScheduler;
    currentScheduler = scheduler;
    return oldScheduler;
};
export const get = () => {
    return currentScheduler ?? DefaultScheduler.get();
};
