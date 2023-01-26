/// <reference types="./Observer.schedule.d.ts" />
import { pipe } from '../../../functions.mjs';
import Scheduler_schedule from '../../../scheduling/__internal__/Scheduler/Scheduler.schedule.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Observer_getScheduler from './Observer.getScheduler.mjs';

const Observer_schedule = (f, options) => observer => pipe(observer, Observer_getScheduler, Scheduler_schedule(f, options), Disposable_addTo(observer));

export { Observer_schedule as default };
