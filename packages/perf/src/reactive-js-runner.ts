import { create as createPerfTestingScheduler } from "@reactive-js/perf-testing-scheduler";
import { connect, ObservableLike } from "@reactive-js/rx-observable";

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = createPerfTestingScheduler();
  connect(observable, scheduler);
  scheduler.run();
};
