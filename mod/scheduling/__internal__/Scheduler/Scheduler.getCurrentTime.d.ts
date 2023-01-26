import { SchedulerLike_now } from "../../../scheduling.js";
declare const Scheduler$getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
export { Scheduler$getCurrentTime as default };
