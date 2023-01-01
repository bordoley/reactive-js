/// <reference types="./ObserverLike.schedule.d.ts" />
import { pipe } from '../../../functions.mjs';
import { schedule } from '../../../scheduling/SchedulerLike.mjs';
import { addTo } from '../../../util/DisposableLike.mjs';
import ObserverLike__getScheduler from './ObserverLike.getScheduler.mjs';

const ObserverLike__schedule = (f, options) => observer => pipe(observer, ObserverLike__getScheduler, schedule(f, options), addTo(observer));

export { ObserverLike__schedule as default };
