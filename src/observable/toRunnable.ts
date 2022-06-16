import { addDisposableDisposeParentOnChildError } from "../disposable";
import { Factory, Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { RunnableLike, createRunnable } from "../runnable";
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
      addDisposableDisposeParentOnChildError(sink, scheduler);

      const subscription = pipe(
        source,
        subscribe(scheduler, sink.notify, sink),
      );
      addDisposableDisposeParentOnChildError(sink, subscription);

      scheduler.run();
      scheduler.dispose();
    });
