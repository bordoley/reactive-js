import { DispatcherLike_scheduler, SchedulerLike } from "../../../scheduling.mjs";
declare const getScheduler: (dispatcher: {
    [DispatcherLike_scheduler]: SchedulerLike;
}) => SchedulerLike;
export { getScheduler as default };
