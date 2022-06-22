import { ignoreElements, startWith } from "../container";
import { addDisposableDisposeParentOnChildError } from "../disposable";
import { Factory, Reducer, pipe } from "../functions";
import {
  MulticastObservableLike,
  ObservableLike,
  Observer,
  StreamLike,
  concatT,
  createSubject,
  dispatchTo,
  fromArrayT,
  keepT,
  onNotify,
  reduce,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import { AbstractDisposableSource } from "../source";
import { FlowMode, FlowableSinkLike, StreamableLike } from "../streamable";
import { createStreamable, stream } from "./streamable";

class FlowableSinkAccumulatorImpl<T, TAcc>
  extends AbstractDisposableSource<TAcc, Observer<TAcc>>
  implements FlowableSinkLike<T>, MulticastObservableLike<TAcc>
{
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

  sink(observer: Observer<TAcc>): void {
    this.subject.sink(observer);
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
    pipe(
      events,
      reduce(reducer, initialValue),
      onNotify(dispatchTo(subject)),
      ignoreElements(keepT),
      startWith({ ...concatT, ...fromArrayT }, "pause", "resume"),
    );

  const streamable = createStreamable(op);

  const sinkAcc = new FlowableSinkAccumulatorImpl(subject, streamable);

  addDisposableDisposeParentOnChildError(sinkAcc, subject);

  return sinkAcc;
};
