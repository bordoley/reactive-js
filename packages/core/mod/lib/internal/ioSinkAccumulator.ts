import { addDisposable, AbstractDisposable, addDisposableDisposeParentOnChildError } from "../disposable.ts";
import { FlowMode } from "../flowable.ts";
import { Reducer, pipe, Factory } from "../functions.ts";
import { IOEvent, IOEventType, IOSinkLike } from "../io.ts";
import {
  StreamLike,
  MulticastObservableLike,
  using,
  takeWhile,
  keepType,
  map as mapObs,
  onNotify,
  subscribe,
  createObservable,
  dispatch,
  reduce,
  ObserverLike,
  createSubject,
  dispatchTo,
  ObservableLike,
} from "../observable.ts";
import { SchedulerLike } from "../scheduler.ts";
import { stream, createStreamable, StreamableLike } from "../streamable.ts";

const isNotify = <T>(
  ev: IOEvent<T>,
): ev is { readonly type: IOEventType.Notify; readonly data: T } =>
  ev.type === IOEventType.Notify;

/**
 * @experimental
 * @noInheritDoc
 * */
export interface IOSinkAccumulatorLike<T, TAcc> extends IOSinkLike<T>, MulticastObservableLike<TAcc> {
}

class IOSinkAccumulatorImpl<T, TAcc> extends AbstractDisposable implements IOSinkAccumulatorLike<T, TAcc> {
  readonly isSynchronous = false;

  private readonly subject: StreamLike<TAcc, TAcc>;
  private readonly streamable: StreamableLike<IOEvent<T>, FlowMode>

  constructor(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, replay: number) {
    super();

    const subject = createSubject(replay);
    addDisposableDisposeParentOnChildError(this, subject);

    const op = (events: ObservableLike<IOEvent<T>>): ObservableLike<FlowMode> =>
      using(
        scheduler =>
          pipe(
            events,
            takeWhile(isNotify),
            keepType(isNotify),
            mapObs(ev => ev.data),
            reduce(reducer, initialValue),
            onNotify(dispatchTo(subject)),
            subscribe(scheduler),
          ),

        eventsSubscription =>
          createObservable(dispatcher => {
            dispatch(dispatcher, FlowMode.Pause);
            dispatch(dispatcher, FlowMode.Resume);
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
    replayCount?: number,
  ): StreamLike<IOEvent<T>, FlowMode> {
    const result = stream(this.streamable, scheduler, replayCount);
    addDisposableDisposeParentOnChildError(this, result);
    return result;
  }
}

/** @experimental */
export const createIOSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  replay = 0,
): IOSinkAccumulatorLike<T, TAcc> =>
  new IOSinkAccumulatorImpl(reducer, initialValue, replay);
