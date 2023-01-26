/// <reference types="./Observer.getScheduler.d.ts" />
import { ObserverLike_scheduler } from '../../../rx.mjs';

const Observer$getScheduler = (observer) => observer[ObserverLike_scheduler];

export { Observer$getScheduler as default };
