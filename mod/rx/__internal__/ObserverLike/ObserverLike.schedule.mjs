/// <reference types="./ObserverLike.schedule.d.ts" />
import { pipe } from '../../../functions.mjs';
import { schedule as schedule$1 } from '../../../scheduling/SchedulerLike.mjs';
import { addTo } from '../../../util/DisposableLike.mjs';
import getScheduler from './ObserverLike.getScheduler.mjs';

const schedule = (f, options) => observer => pipe(observer, getScheduler, schedule$1(f, options), addTo(observer));

export { schedule as default };
