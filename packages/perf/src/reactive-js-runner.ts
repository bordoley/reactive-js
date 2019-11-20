import { Observable, ObservableLike } from "@reactive-js/rx-core";
import { PerfTestingScheduler } from "@reactive-js/virtualtime-scheduler";

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = PerfTestingScheduler.create();
  Observable.connect(observable, scheduler);
  scheduler.run();
};
