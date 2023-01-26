/// <reference types="./Observer.getScheduler.d.ts" />
import { ObserverLike_scheduler } from '../../../rx.mjs';

const Observer_getScheduler = (observer) => observer[ObserverLike_scheduler];

export { Observer_getScheduler as default };
