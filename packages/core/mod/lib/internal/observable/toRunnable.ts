import { Exception, dispose, addDisposableOrTeardown } from "../../disposable.ts";
import { createRunnable } from "../../runnable.ts";
import {
  createVirtualTimeScheduler,
  VirtualTimeSchedulerLike,
} from "../../scheduler.ts";
import { Factory, Function, pipe } from "../../functions.ts";
import { ObservableLike } from "./interfaces.ts";
import { RunnableLike } from "../runnable/interfaces.ts";
import { none, Option, isNone } from "../../option.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

export const toRunnable = <T>(
  schedulerFactory: Factory<
    VirtualTimeSchedulerLike
  > = createVirtualTimeScheduler,
): Function<ObservableLike<T>, RunnableLike<T>> => source =>
  createRunnable(sink => {
    const scheduler = schedulerFactory();
    let error: Option<Exception> = none;

    const subscription = pipe(
      source,
      onNotify((next: T) => {
        sink.notify(next);
      }),
      subscribe(scheduler),
      addDisposableOrTeardown(e => {
        error = e;
        if (isNone(e)) {
          sink.done();
        }
      }),
    );

    scheduler.continue();

    dispose(subscription);
    dispose(scheduler);

    const reifiedError: Option<Exception> = error;
    // FIXME: would rather use isSome(reifiedError) but TS is failing the check for some reason
    if (reifiedError !== none) {
      const { cause } = reifiedError as Exception;
      throw cause;
    }
  });
