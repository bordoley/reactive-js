import { Optional, isSome, none, raiseIfNone } from "../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  SchedulerLike,
} from "../utils.js";

let globalDefaultScheduler: Optional<SchedulerLike & DisposableLike> = none;

interface Signature {
  get(): SchedulerLike;
  getOrNone(): Optional<SchedulerLike>;
  set(scheduler: SchedulerLike & DisposableLike): void;
}

export const set: Signature["set"] = (
  scheduler: SchedulerLike & DisposableLike,
) => {
  const oldGlobalScheduler = globalDefaultScheduler;
  if (isSome(oldGlobalScheduler)) {
    oldGlobalScheduler[DisposableLike_dispose]();
  }

  globalDefaultScheduler = scheduler;

  return globalDefaultScheduler;
};

export const get: Signature["get"] = () => {
  raiseIfNone<SchedulerLike>(
    globalDefaultScheduler,
    "The DefaultScheduler has not been set.",
  );
  return globalDefaultScheduler;
};

export const getOrNone: Signature["getOrNone"] = () => globalDefaultScheduler;
