/// <reference types="./Observer.d.ts" />
import Observer_getDispatcher from './__internal__/Observer/Observer.getDispatcher.mjs';
import Observer_getScheduler from './__internal__/Observer/Observer.getScheduler.mjs';
import Observer_schedule from './__internal__/Observer/Observer.schedule.mjs';

const getDispatcher = Observer_getDispatcher;
const getScheduler = Observer_getScheduler;
const schedule = Observer_schedule;

export { getDispatcher, getScheduler, schedule };
