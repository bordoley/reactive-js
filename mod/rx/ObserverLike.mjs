/// <reference types="./ObserverLike.d.ts" />
import ObserverLike__getDispatcher from './__internal__/ObserverLike/ObserverLike.getDispatcher.mjs';
import ObserverLike__getScheduler from './__internal__/ObserverLike/ObserverLike.getScheduler.mjs';
import ObserverLike__schedule from './__internal__/ObserverLike/ObserverLike.schedule.mjs';

const getDispatcher = ObserverLike__getDispatcher;
const getScheduler = ObserverLike__getScheduler;
const schedule = ObserverLike__schedule;

export { getDispatcher, getScheduler, schedule };
