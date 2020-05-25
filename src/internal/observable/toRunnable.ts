import { Factory, Function1, pipe } from "../../functions";
import { isSome } from "../../option";
import { createRunnable } from "../../runnable";
import {
  createVirtualTimeScheduler,
  VirtualTimeSchedulerLike,
} from "../../scheduler";
import { RunnableLike } from "../runnable/interfaces";
import { ObservableLike } from "./interfaces";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

export const toRunnable = <T>(
  options: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  } = {},
): Function1<ObservableLike<T>, RunnableLike<T>> => source =>
  createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();

    const subscription = pipe(
      source,
      onNotify((next: T) => {
        sink.notify(next);
      }),
      subscribe(scheduler),
    );

    scheduler.run();

    const { error } = subscription;
    if (isSome(error)) {
      const { cause } = error;
      throw cause;
    }
    sink.done();
  });
