import { Optional, isNone, none, raise } from "../../functions";
import { SchedulerLike } from "../../scheduling";

let currentScheduler: Optional<SchedulerLike> = none;

export const get = (): SchedulerLike =>
  isNone(currentScheduler)
    ? raise<SchedulerLike>("scheduler is none")
    : currentScheduler;

export const getOrNone = (): Optional<SchedulerLike> => currentScheduler;

export const set = (scheduler: Optional<SchedulerLike>): void => {
  currentScheduler = scheduler;
};
