import {
  AbstractDisposable,
  addDisposable,
  addDisposableDisposeParentOnChildError,
} from "../disposable";
import { Factory, Reducer, pipe } from "../functions";
import {
  MulticastObservableLike,
  ObservableLike,
  Observer,
  StreamLike,
  createObservable,
  createSubject,
  reduce,
  subscribe,
  using,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import { FlowMode, FlowableSinkLike, StreamableLike } from "../streamable";
import { createStreamable, stream } from "./streamable";

class FlowableSinkAccumulatorImpl<T, TAcc>
  extends AbstractDisposable
  implements FlowableSinkLike<T>, MulticastObservableLike<TAcc>
{
  get type(): this {
    return this;
  }
  get T(): unknown {
    return undefined;
  }

  get sinkType(): Observer<TAcc> {
    return undefined as any;
  }

  readonly isSynchronous = false;

  constructor(
    private readonly subject: StreamLike<TAcc, TAcc>,
    private readonly streamable: StreamableLike<T, FlowMode>,
  ) {
    super();
  }

  get observerCount(): number {
    return this.subject.observerCount;
  }

  observe(observer: Observer<TAcc>): void {
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
export const createFlowableSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options?: { readonly replay?: number },
): FlowableSinkLike<T> & MulticastObservableLike<TAcc> => {
  const subject = createSubject(options);

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

  const streamable = createStreamable(op);

  const sinkAcc = new FlowableSinkAccumulatorImpl(subject, streamable);

  addDisposableDisposeParentOnChildError(sinkAcc, subject);

  return sinkAcc;
};
