/// <reference types="./ObserverLike.getScheduler.d.ts" />
import { ObserverLike_scheduler } from '../../../rx.mjs';

const ObserverLike__getScheduler = (observer) => observer[ObserverLike_scheduler];

export { ObserverLike__getScheduler as default };
