/// <reference types="./Observer.d.ts" />
import Observer_getDispatcher from './Observer/__internal__/Observer.getDispatcher.mjs';
import Observer_getScheduler from './Observer/__internal__/Observer.getScheduler.mjs';
import Observer_schedule from './Observer/__internal__/Observer.schedule.mjs';

const getDispatcher = Observer_getDispatcher;
const getScheduler = Observer_getScheduler;
const schedule = Observer_schedule;
/** @ignore */
const Observer = {
    getDispatcher,
    getScheduler,
    schedule,
};

export { Observer as default, getDispatcher, getScheduler, schedule };
