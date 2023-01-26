/// <reference types="./Observer.schedule.d.ts" />
import { pipe } from '../../../functions.mjs';
import Scheduler$schedule from '../../../scheduling/__internal__/Scheduler/Scheduler.schedule.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Observer$getScheduler from './Observer.getScheduler.mjs';

const Observer$schedule = (f, options) => observer => pipe(observer, Observer$getScheduler, Scheduler$schedule(f, options), Disposable$addTo(observer));

export { Observer$schedule as default };
