import { subscribe, ObservableLike } from "@reactive-js/rx";
import { createSynchronousSchedulerResource } from "@reactive-js/schedulers";

export const run = <T>(observable: ObservableLike<T>) => {
  // FIXME: We aren't using the iterate function because
  // it's exception handling skews the results in a few cases.
  const scheduler = createSynchronousSchedulerResource();
  subscribe(scheduler)(observable);
  scheduler.run();
};
