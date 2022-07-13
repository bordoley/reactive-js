import { SchedulerLike, SchedulerOptions } from "./SchedulerLike";

export const PausableSchedulerLike_pause = Symbol(
  "PausableSchedulerLike_pause",
);
export const PausableSchedulerLike_resume = Symbol(
  "PausableSchedulerLike_resume",
);

export interface PausableSchedulerLike<
  TOptions extends SchedulerOptions = SchedulerOptions,
> extends SchedulerLike<TOptions> {
  [PausableSchedulerLike_pause](): void;
  [PausableSchedulerLike_resume](): void;
}

export const pause = (scheduler: {
  [PausableSchedulerLike_pause](): void;
}): void => scheduler[PausableSchedulerLike_pause]();

export const resume = (scheduler: {
  [PausableSchedulerLike_resume](): void;
}): void => scheduler[PausableSchedulerLike_resume]();
