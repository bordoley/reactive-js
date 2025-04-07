import { Optional, none } from "../../functions.js";
import { SchedulerLike } from "../../utils.js";
import * as DefaultScheduler from "../DefaultScheduler.js";

let currentScheduler: Optional<SchedulerLike> = none;

interface Signature {
  get(): SchedulerLike;
  set(scheduler: Optional<SchedulerLike>): Optional<SchedulerLike>;
}

export const set: Signature["set"] = (scheduler: SchedulerLike) => {
  const oldScheduler = currentScheduler;
  currentScheduler = scheduler;

  return oldScheduler;
};

export const get: Signature["get"] = () => {
  return currentScheduler ?? DefaultScheduler.get();
};
