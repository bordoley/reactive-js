/// <reference types="./Observable.delay.d.ts" />

import { DisposableLike_dispose, SchedulerLike_schedule, } from "../../../utils.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Observable_delay = (delay) => DeferredSource.create((observer) => observer[SchedulerLike_schedule](() => observer[DisposableLike_dispose](), {
    delay,
}));
export default Observable_delay;
