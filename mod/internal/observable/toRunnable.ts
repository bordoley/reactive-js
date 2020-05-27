import { Factory, Function1, pipe } from "../../functions.ts";
import { isSome } from "../../option.ts";
import { createRunnable } from "../../runnable.ts";
import {
  createVirtualTimeScheduler,
  VirtualTimeSchedulerLike,
} from "../../scheduler.ts";
import { RunnableLike, SinkLike } from "../runnable/interfaces.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import { subscribe } from "./subscribe.ts";
import { AbstractAutoDisposingDelegatingObserver } from "./observer.ts";
import { lift } from "./lift.ts";

class ToRunnableObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  T
> {
  constructor(
    delegate: ObserverLike<T>,
    private readonly sink: SinkLike<T>
  ) {
    super(delegate);
  }

  notify(next: T) {
    this.sink.notify(next);
  }
}

export const toRunnable = <T>(
  options: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  } = {},
): Function1<ObservableLike<T>, RunnableLike<T>> => source =>
  createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();

    const operator = (delegate: ObserverLike<T>) =>
      new ToRunnableObserver(delegate, sink);
    operator.isSynchronous = true;

    const subscription = pipe(
      source,
      lift(operator),
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
