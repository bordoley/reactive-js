/// <reference types="./Observer.schedule.d.ts" />

import { pipe } from "../../../functions.js";
import { ObserverLike_scheduler } from "../../../rx.js";
import { SchedulerLike_schedule } from "../../../scheduling.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const Observer_schedule = (f, options) => observer => pipe(observer[ObserverLike_scheduler][SchedulerLike_schedule](f, options), Disposable_addTo(observer));
export default Observer_schedule;
