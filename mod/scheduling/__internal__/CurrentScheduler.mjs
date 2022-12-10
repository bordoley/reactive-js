/// <reference types="./CurrentScheduler.d.ts" />
import { none, isNone, raise } from '../../functions.mjs';

let currentScheduler = none;
const get = () => isNone(currentScheduler)
    ? raise("scheduler is none")
    : currentScheduler;
const getOrNone = () => currentScheduler;
const set = (scheduler) => {
    currentScheduler = scheduler;
};

export { get, getOrNone, set };
