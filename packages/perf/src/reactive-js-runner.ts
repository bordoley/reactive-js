import { ObservableLike } from "@reactive-js/rx-core";
import { connect } from "@reactive-js/rx-observable";
import { createPerfTestingScheduler } from "@reactive-js/schedulers";

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = createPerfTestingScheduler();
  connect(observable, scheduler);
  scheduler.run();
};
