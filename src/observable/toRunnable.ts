import { Factory, Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { isSome } from "../option";
import { RunnableLike, createRunnable } from "../runnable";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduler";
import { subscribe } from "./subscribe";


export const toRunnable = <T>(
  options: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  } = {},
): Function1<ObservableLike<T>, RunnableLike<T>> => source =>
  createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();

    const subscription = pipe(source, subscribe(scheduler, e => sink.notify(e)));

    scheduler.run();

    const { error } = subscription;
    if (isSome(error)) {
      const { cause } = error;
      throw cause;
    }
    sink.done();
  });
