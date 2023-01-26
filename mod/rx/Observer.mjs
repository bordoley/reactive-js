/// <reference types="./Observer.d.ts" />
import Observer$getDispatcher from './__internal__/Observer/Observer.getDispatcher.mjs';
import Observer$getScheduler from './__internal__/Observer/Observer.getScheduler.mjs';
import Observer$schedule from './__internal__/Observer/Observer.schedule.mjs';

const getDispatcher = Observer$getDispatcher;
const getScheduler = Observer$getScheduler;
const schedule = Observer$schedule;

export { getDispatcher, getScheduler, schedule };
