import {
  AbstractDisposable,
  addDisposable,
  addDisposableDisposeParentOnChildError,
} from "../disposable";
import { Factory, Reducer, pipe } from "../functions";
import {
  ObservableLike,
  ObserverLike,
  StreamLike,
  createObservable,
  createSubject,
  reduce,
  subscribe,
  using,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import { FlowMode, IOSinkAccumulatorLike, StreamableLike } from "../streamable";
import { createStreamable, stream } from "./streamable";

class IOSinkAccumulatorImpl<T, TAcc>
  extends AbstractDisposable
  implements IOSinkAccumulatorLike<T, TAcc>
{
  get type(): this {
    return this;
  }
  get T(): unknown {
    return undefined;
  }

  readonly isSynchronous = false;

  private readonly subject: StreamLike<TAcc, TAcc>;
  private readonly streamable: StreamableLike<T, FlowMode>;

  constructor(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    options?: { readonly replay?: number },
  ) {
    super();

    const subject = createSubject(options);
    addDisposableDisposeParentOnChildError(this, subject);

    const op = (events: ObservableLike<T>): ObservableLike<FlowMode> =>
      using(
        scheduler =>
          pipe(
            events,
            reduce(reducer, initialValue),
            subscribe(scheduler, subject.dispatch, subject),
          ),

        eventsSubscription =>
          createObservable(dispatcher => {
            dispatcher.dispatch("pause");
            dispatcher.dispatch("resume");
            addDisposable(eventsSubscription, dispatcher);
          }),
      );

    this.streamable = createStreamable(op);
    this.subject = subject;
  }

  get observerCount(): number {
    return this.subject.observerCount;
  }

  observe(observer: ObserverLike<TAcc>): void {
    this.subject.observe(observer);
  }

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay: number },
  ): StreamLike<T, FlowMode> {
    const result = pipe(this.streamable, stream(scheduler, options));
    addDisposableDisposeParentOnChildError(this, result);
    return result;
  }
}

/** @experimental */
export const createIOSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options?: { readonly replay?: number },
): IOSinkAccumulatorLike<T, TAcc> =>
  new IOSinkAccumulatorImpl(reducer, initialValue, options);
