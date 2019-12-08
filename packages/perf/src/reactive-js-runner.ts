import { connect, ObservableLike } from "@reactive-js/rx";
import { createPerfTestingScheduler } from "@reactive-js/schedulers";

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = createPerfTestingScheduler();
  connect(observable, scheduler);
  scheduler.run();
};
