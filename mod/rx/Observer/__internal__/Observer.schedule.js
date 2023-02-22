/// <reference types="./Observer.schedule.d.ts" />

import { pipe } from "../../../functions.js";
import Scheduler_schedule from "../../../scheduling/Scheduler/__internal__/Scheduler.schedule.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import getScheduler from "./Observer.getScheduler.js";
const Observer_schedule = (f, options) => observer => pipe(observer, getScheduler, Scheduler_schedule(f, options), Disposable_addTo(observer));
export default Observer_schedule;
