/// <reference types="./ObserverLike.d.ts" />
import { pipe } from '../functions.mjs';
import { ObserverLike_scheduler, ObserverLike_dispatcher } from '../rx.mjs';
import { schedule as schedule$1 } from '../scheduling/SchedulerLike.mjs';
import { addTo } from '../util/DisposableLike.mjs';

const getScheduler = (observer) => observer[ObserverLike_scheduler];
const getDispatcher = (observer) => observer[ObserverLike_dispatcher];
const schedule = (f, options) => observer => pipe(observer, getScheduler, schedule$1(f, options), addTo(observer));

export { getDispatcher, getScheduler, schedule };
