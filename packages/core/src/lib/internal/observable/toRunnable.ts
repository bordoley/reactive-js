import { Exception, dispose, addDisposableOrTeardown } from "../../disposable";
import { createRunnable } from "../../runnable";
import {
  createVirtualTimeScheduler,
  VirtualTimeSchedulerLike,
} from "../../scheduler";
import { Factory, Function1, pipe } from "../../functions";
import { ObservableLike } from "./interfaces";
import { RunnableLike } from "../runnable/interfaces";
import { none, Option, isNone } from "../../option";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

export const toRunnable = <T>(
  schedulerFactory: Factory<
    VirtualTimeSchedulerLike
  > = createVirtualTimeScheduler,
): Function1<ObservableLike<T>, RunnableLike<T>> => source =>
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

    scheduler.run();

    dispose(subscription);
    dispose(scheduler);

    const reifiedError: Option<Exception> = error;
    // FIXME: would rather use isSome(reifiedError) but TS is failing the check for some reason
    if (reifiedError !== none) {
      const { cause } = reifiedError as Exception;
      throw cause;
    }
  });
