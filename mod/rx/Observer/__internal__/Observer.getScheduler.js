/// <reference types="./Observer.getScheduler.d.ts" />

import { ObserverLike_scheduler } from "../../../rx.js";
const Observer_getScheduler = (observer) => observer[ObserverLike_scheduler];
export default Observer_getScheduler;
