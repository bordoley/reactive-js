import { SchedulerOptions, SchedulerLike } from "./SchedulerLike.mjs";
declare const PausableSchedulerLike_pause: unique symbol;
declare const PausableSchedulerLike_resume: unique symbol;
interface PausableSchedulerLike<TOptions extends SchedulerOptions = SchedulerOptions> extends SchedulerLike<TOptions> {
    [PausableSchedulerLike_pause](): void;
    [PausableSchedulerLike_resume](): void;
}
declare const pause: (scheduler: {
    [PausableSchedulerLike_pause](): void;
}) => void;
declare const resume: (scheduler: {
    [PausableSchedulerLike_resume](): void;
}) => void;
export { PausableSchedulerLike, PausableSchedulerLike_pause, PausableSchedulerLike_resume, pause, resume };
