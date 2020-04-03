import { ObservableLike, toValue } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { createVirtualTimeScheduler } from "@reactive-js/scheduler";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue(createVirtualTimeScheduler));
};
