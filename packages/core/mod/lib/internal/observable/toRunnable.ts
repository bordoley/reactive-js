import { Factory, Function1, pipe } from "../../functions.ts";
import { isSome } from "../../option.ts";
import { createRunnable } from "../../runnable.ts";
import {
  createVirtualTimeScheduler,
  VirtualTimeSchedulerLike,
} from "../../scheduler.ts";
import { RunnableLike } from "../runnable/interfaces.ts";
import { ObservableLike } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

export const toRunnable = <T>(
  schedulerFactory: Factory<
    VirtualTimeSchedulerLike
  > = createVirtualTimeScheduler,
): Function1<ObservableLike<T>, RunnableLike<T>> => source =>
  createRunnable(sink => {
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
