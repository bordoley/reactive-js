import { Updater } from "../../../functions.js";
import {
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../../../scheduling.js";

const VirtualTimeScheduler_run: Updater<
  VirtualTimeSchedulerLike
> = scheduler => {
  scheduler[VirtualTimeSchedulerLike_run]();
  return scheduler;
};

export default VirtualTimeScheduler_run;
