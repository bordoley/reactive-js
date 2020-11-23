import { Factory, Function1, pipe } from "../../functions";
import { isSome } from "../../option";
import { createRunnable, RunnableLike, SinkLike } from "../../runnable";
import {
  createVirtualTimeScheduler,
  VirtualTimeSchedulerLike,
} from "../../scheduler";
import { ObservableLike, ObserverLike } from "../../observable";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";
import { subscribe } from "./subscribe";

class ToRunnableObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  T
> {
  constructor(delegate: ObserverLike<T>, private readonly sink: SinkLike<T>) {
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

    const subscription = pipe(source, lift(operator), subscribe(scheduler));

    scheduler.run();

    const { error } = subscription;
    if (isSome(error)) {
      const { cause } = error;
      throw cause;
    }
    sink.done();
  });
