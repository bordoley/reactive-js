import { connect, ObservableLike } from "@reactive-js/rx-core";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

export const run = <T>(observable: ObservableLike<T>) => {
  const scheduler = VirtualTimeScheduler.create();
  connect(observable, scheduler);
  scheduler.run();
};
