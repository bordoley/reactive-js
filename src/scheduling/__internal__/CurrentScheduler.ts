import { Option, isNone, none, raise } from "../../functions";
import { SchedulerLike } from "../../scheduling";

let currentScheduler: Option<SchedulerLike> = none;

export const get = (): SchedulerLike =>
  isNone(currentScheduler)
    ? raise<SchedulerLike>("scheduler is none")
    : currentScheduler;

export const getOrNone = (): Option<SchedulerLike> => currentScheduler;

export const set = (scheduler: Option<SchedulerLike>): void => {
  currentScheduler = scheduler;
};
