import { SchedulerLike_requestYield } from "../../../scheduling.mjs";
declare const requestYield: (scheduler: {
    [SchedulerLike_requestYield](): void;
}) => void;
export { requestYield as default };
