import { addDisposable } from "../disposable";
import { FlowMode } from "../flowable";
import { Reducer, pipe, returns, Factory } from "../functions";
import { IOEvent, IOEventType, IOSinkLike } from "../io";
import {
  StreamLike,
  ObservableLike,
  using,
  takeWhile,
  keepType,
  map as mapObs,
  onNotify,
  subscribe,
  createObservable,
  dispatch,
  reduce,
} from "../observable";
import { SchedulerLike } from "../scheduler";
import { stream, createStreamable } from "../streamable";

const isNotify = <T>(
  ev: IOEvent<T>,
): ev is { readonly type: IOEventType.Notify; readonly data: T } =>
  ev.type === IOEventType.Notify;

/**
 * @experimental
 * @noInheritDoc
 * */
export interface IOSinkAccumulatorLike<T, TAcc> extends IOSinkLike<T> {
  readonly acc: TAcc;
}

class IOSinkAccumulatorImpl<T, TAcc> implements IOSinkAccumulatorLike<T, TAcc> {
  constructor(private readonly reducer: Reducer<T, TAcc>, public acc: TAcc) {}

  stream(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): StreamLike<IOEvent<T>, FlowMode> {
    const op = (events: ObservableLike<IOEvent<T>>) =>
      using(
        scheduler =>
          pipe(
            events,
            takeWhile(isNotify),
            keepType(isNotify),
            mapObs(ev => ev.data),
            reduce(this.reducer, returns(this.acc)),
            onNotify(acc => {
              this.acc = acc;
            }),
            subscribe(scheduler),
          ),

        eventsSubscription =>
          createObservable(dispatcher => {
            dispatch(dispatcher, FlowMode.Pause);
            dispatch(dispatcher, FlowMode.Resume);
            addDisposable(eventsSubscription, dispatcher);
          }),
      );
    return stream(createStreamable(op), scheduler, replayCount);
  }
}

/** @experimental */
export const createIOSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): IOSinkAccumulatorLike<T, TAcc> =>
  new IOSinkAccumulatorImpl(reducer, initialValue());
