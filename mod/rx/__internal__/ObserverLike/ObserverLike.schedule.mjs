/// <reference types="./ObserverLike.schedule.d.ts" />
import { pipe } from '../../../functions.mjs';
import SchedulerLike__schedule from '../../../scheduling/__internal__/SchedulerLike/SchedulerLike.schedule.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import ObserverLike__getScheduler from './ObserverLike.getScheduler.mjs';

const ObserverLike__schedule = (f, options) => observer => pipe(observer, ObserverLike__getScheduler, SchedulerLike__schedule(f, options), DisposableLike__addTo(observer));

export { ObserverLike__schedule as default };
