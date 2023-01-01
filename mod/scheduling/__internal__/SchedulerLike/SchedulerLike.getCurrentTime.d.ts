import { SchedulerLike_now } from "../../../scheduling.mjs";
declare const SchedulerLike__getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
export { SchedulerLike__getCurrentTime as default };
