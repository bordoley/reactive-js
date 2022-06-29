import { ignoreElements, startWith } from "../container";
import { dispatchTo } from "../dispatcher";
import { add, addTo } from "../disposable";
import { Factory, Reducer, pipe } from "../functions";
import {
  AbstractDisposableObservable,
  MulticastObservableLike,
  StreamLike,
  concatT,
  createSubject,
  fromArrayT,
  keepT,
  observerCount,
  onNotify,
  reduce,
  replay,
} from "../observable";
import { Observer } from "../observer";

import { SchedulerLike } from "../scheduler";
import { sinkInto } from "../source";
import { FlowMode, FlowableSinkLike } from "../streamable";
import { createLiftedStreamable, stream } from "./streamable";

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
    return observerCount(this.subject);
  }

  get replay(): number {
    return replay(this.subject);
  }

  sink(observer: Observer<TAcc>): void {
    pipe(this.subject, sinkInto(observer));
  }

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay: number },
  ): StreamLike<T, FlowMode> {
    return pipe(this.streamable, stream(scheduler, options), addTo(this));
  }
}

/** @experimental */
export const createFlowableSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options?: { readonly replay?: number },
): FlowableSinkLike<T> & MulticastObservableLike<TAcc> => {
  const subject = createSubject(options);

  return pipe(
    createLiftedStreamable(
      reduce(reducer, initialValue),
      onNotify(dispatchTo(subject)),
      ignoreElements(keepT),
      startWith({ ...concatT, ...fromArrayT }, "pause", "resume"),
    ),
    streamable => new FlowableSinkAccumulatorImpl(subject, streamable),
    add(subject),
  );
};
