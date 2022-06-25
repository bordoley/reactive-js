import { addChildAndDisposeOnError } from "../disposable";
import { Factory, Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { RunnableLike, ToRunnable, createRunnable } from "../runnable";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduler";
import { subscribe } from "./subscribe";

export const toRunnable =
  <T>(
    options: {
      readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
    } = {},
  ): Function1<ObservableLike<T>, RunnableLike<T>> =>
  source =>
    createRunnable(sink => {
      const { schedulerFactory = createVirtualTimeScheduler } = options;
      const scheduler = schedulerFactory();
      const subscription = pipe(
        source,
        subscribe(scheduler, sink.notify, sink),
      );

      pipe(
        sink,
        addChildAndDisposeOnError(scheduler),
        addChildAndDisposeOnError(subscription),
      );

      scheduler.run();
      scheduler.dispose();
    });

export const toRunnableT: ToRunnable<ObservableLike<unknown>> = {
  toRunnable,
};
