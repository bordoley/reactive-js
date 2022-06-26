import { ignoreElements, startWith } from "../container";
import {
  addDisposeOnChildError,
  addToDisposeOnChildError,
} from "../disposable";
import { Factory, Reducer, compose, pipe } from "../functions";
import {
  AbstractDisposableObservable,
  MulticastObservableLike,
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
import { FlowMode, FlowableSinkLike } from "../streamable";
import { createStreamable, stream } from "./streamable";

class FlowableSinkAccumulatorImpl<T, TAcc>
  extends AbstractDisposableObservable<TAcc>
  implements FlowableSinkLike<T>, MulticastObservableLike<TAcc>
{
  constructor(
    private readonly subject: StreamLike<TAcc, TAcc>,
    private readonly streamable: FlowableSinkLike<T>,
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
    return pipe(
      this.streamable,
      stream(scheduler, options),
      addToDisposeOnChildError(this),
    );
  }
}

/** @experimental */
export const createFlowableSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options?: { readonly replay?: number },
): FlowableSinkLike<T> & MulticastObservableLike<TAcc> => {
  const subject = createSubject(options);

  const sinkAcc = pipe(
    compose(
      reduce(reducer, initialValue),
      onNotify(dispatchTo(subject)),
      ignoreElements(keepT),
      startWith({ ...concatT, ...fromArrayT }, "pause", "resume"),
    ),
    createStreamable,
    streamable => new FlowableSinkAccumulatorImpl(subject, streamable),
    addDisposeOnChildError(subject),
  );

  return sinkAcc;
};
