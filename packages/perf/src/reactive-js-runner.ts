import { connect, ObservableLike } from "@reactive-js/rx";
import { createSynchronousSchedulerResource } from "@reactive-js/schedulers";

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = createSynchronousSchedulerResource();
  connect(scheduler)(observable);
  scheduler.run();
};
