import { SchedulerLike_shouldYield } from "../../../scheduling.mjs";
declare const shouldYield: (scheduler: {
    [SchedulerLike_shouldYield]: boolean;
}) => boolean;
export { shouldYield };
