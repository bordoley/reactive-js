import { addAndDisposeParentOnChildError } from "../disposable";
import { Factory, Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { RunnableLike, ToRunnable, createRunnable } from "../runnable";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduler";
import { onNotify } from "./onNotify";
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
        onNotify(v => sink.notify(v)),
        subscribe(scheduler),
      );

      pipe(
        sink,
        addAndDisposeParentOnChildError(scheduler),
        addAndDisposeParentOnChildError(subscription),
      );

      scheduler.run();
      scheduler.dispose();
    });

export const toRunnableT: ToRunnable<ObservableLike<unknown>> = {
  toRunnable,
};
