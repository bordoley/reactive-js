import { SchedulerLike_now } from "../../../scheduling.js";
declare const Scheduler_getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
export default Scheduler_getCurrentTime;
