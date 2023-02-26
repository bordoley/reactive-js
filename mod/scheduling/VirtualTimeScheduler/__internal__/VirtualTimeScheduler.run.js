/// <reference types="./VirtualTimeScheduler.run.d.ts" />

import { VirtualTimeSchedulerLike_run, } from "../../../scheduling.js";
const VirtualTimeScheduler_run = scheduler => {
    scheduler[VirtualTimeSchedulerLike_run]();
    return scheduler;
};
export default VirtualTimeScheduler_run;
