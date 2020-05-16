import {
  IOEvent,
  IOEventType,
  IOSinkLike,
} from "../io.ts";
import { FlowMode } from "../flowable.ts";
import { Reducer, pipe, returns, Factory } from "../functions.ts";
import { SchedulerLike } from "../scheduler.ts";
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
} from "../observable.ts";
import { add } from "../disposable.ts";
import { stream, createStreamable } from "../streamable.ts";

const isNext = <T>(
  ev: IOEvent<T>,
): ev is { readonly type: IOEventType.Next; readonly data: T } =>
  ev.type === IOEventType.Next;

/**
 * @experimental
 * @noInheritDoc
 * */
export interface IOSinkAccumulatorLike<T, TAcc>
  extends IOSinkLike<T> {
  readonly acc: TAcc;
}

class IOSinkAccumulatorImpl<T, TAcc>
  implements IOSinkAccumulatorLike<T, TAcc> {
  constructor(private readonly reducer: Reducer<T, TAcc>, private _acc: TAcc) {}

  get acc() {
    return this._acc;
  }

  stream(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): StreamLike<IOEvent<T>, FlowMode> {
    const op = (events: ObservableLike<IOEvent<T>>) =>
      using(
        scheduler =>
          pipe(
            events,
            takeWhile(isNext),
            keepType(isNext),
            mapObs(ev => ev.data),
            reduce(this.reducer, returns(this.acc)),
            onNotify(acc => {
              this._acc = acc;
            }),
            subscribe(scheduler),
          ),

        eventsSubscription =>
          createObservable(dispatcher => {
            dispatch(dispatcher, FlowMode.Pause);
            dispatch(dispatcher, FlowMode.Resume);
            add(eventsSubscription, dispatcher);
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
