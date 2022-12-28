/// <reference types="./ObserverLike.getScheduler.d.ts" />
import { ObserverLike_scheduler } from '../../../rx.mjs';

const getScheduler = (observer) => observer[ObserverLike_scheduler];

export { getScheduler as default };
