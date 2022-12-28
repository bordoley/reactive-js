/// <reference types="./ObserverLike.d.ts" />
import getDispatcher$1 from './__internal__/ObserverLike/ObserverLike.getDispatcher.mjs';
import getScheduler$1 from './__internal__/ObserverLike/ObserverLike.getScheduler.mjs';
import schedule$1 from './__internal__/ObserverLike/ObserverLike.schedule.mjs';

const getDispatcher = getDispatcher$1;
const getScheduler = getScheduler$1;
const schedule = schedule$1;

export { getDispatcher, getScheduler, schedule };
