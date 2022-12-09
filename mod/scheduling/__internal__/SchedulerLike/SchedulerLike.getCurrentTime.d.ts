import { SchedulerLike_now } from "../../../scheduling.mjs";
declare const getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
export { getCurrentTime };
