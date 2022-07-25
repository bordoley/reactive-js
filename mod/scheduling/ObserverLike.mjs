/// <reference types="./ObserverLike.d.ts" />
import { ObserverLike_scheduler, ObserverLike_dispatcher } from '../scheduling.mjs';

const getScheduler = (observer) => observer[ObserverLike_scheduler];
const getDispatcher = (observer) => observer[ObserverLike_dispatcher];

export { getDispatcher, getScheduler };
