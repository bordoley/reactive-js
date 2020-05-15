import {
  FlowEvent,
  FlowEventType,
  FlowableSinkLike,
  FlowMode,
} from "../flowable.ts";
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
} from "../observable.ts";
import { add } from "../disposable.ts";
import { stream, createStreamable } from "../streamable.ts";
import { reduceOp } from "./observable/reduce.ts";

const isNext = <T>(
  ev: FlowEvent<T>,
): ev is { readonly type: FlowEventType.Next; readonly data: T } =>
  ev.type === FlowEventType.Next;

/**
 * @experimental
 * @noInheritDoc
 * */
export interface FlowableSinkAccumulatorLike<T, TAcc>
  extends FlowableSinkLike<T> {
  readonly acc: TAcc;
}

class FlowableSinkAccumulatorImpl<T, TAcc>
  implements FlowableSinkAccumulatorLike<T, TAcc> {
  constructor(private readonly reducer: Reducer<T, TAcc>, private _acc: TAcc) {}

  get acc() {
    return this._acc;
  }

  stream(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): StreamLike<FlowEvent<T>, FlowMode> {
    const op = (events: ObservableLike<FlowEvent<T>>) =>
      using(
        scheduler =>
          pipe(
            events,
            takeWhile(isNext),
            keepType(isNext),
            mapObs(ev => ev.data),
            reduceOp(this.reducer, returns(this.acc)),
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
export const createFlowableSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): FlowableSinkAccumulatorLike<T, TAcc> =>
  new FlowableSinkAccumulatorImpl(reducer, initialValue());
