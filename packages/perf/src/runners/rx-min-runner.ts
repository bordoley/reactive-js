import {
  connect,
  ObservableLike,
} from "@rx-min/rx-core";
import { VirtualTimeScheduler } from "@rx-min/rx-virtualtime-scheduler";

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = VirtualTimeScheduler.create();
  connect(observable, scheduler);
  scheduler.run();
};
