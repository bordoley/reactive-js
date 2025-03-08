import * as EventSource from "../computations/EventSource.js";
import {
  AsyncIterableLike,
  DeferredObservableWithSideEffectsLike,
  FlowableLike,
  FlowableLike_flow,
  ObservableLike_observe,
  SynchronousObservableLike,
} from "../computations.js";
import { Function1, invoke, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import {
  DispatcherLike,
  DispatcherLike_state,
  DispatcherState_capacityExceeded,
  DispatcherState_completed,
  DispatcherState_ready,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../utils.js";
import * as AsyncIterable from "./AsyncIterable.js";
import * as Observable from "./Observable.js";

/**
 * @noInheritDoc
 */
export interface FlowableModule {
  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): Function1<FlowableLike<T>, DeferredObservableWithSideEffectsLike<T>>;

  fromAsyncIterable<T>(): Function1<AsyncIterableLike<T>, FlowableLike<T>>;

  fromSynchronousObservable<T>(): Function1<
    SynchronousObservableLike<T>,
    FlowableLike<T>
  >;
}

export type Signature = FlowableModule;

export const dispatchTo: Signature["dispatchTo"] =
  <T>(dispatcher: DispatcherLike<T>) =>
  (flowable: FlowableLike<T>) =>
    Observable.create<T>(observer => {
      const flowed = pipe(
        flowable[FlowableLike_flow](observer, {
          backpressureStrategy: observer[QueueableLike_backpressureStrategy],
          capacity: observer[QueueableLike_capacity],
        }),
        Disposable.addTo(observer),
      );

      pipe(
        dispatcher[DispatcherLike_state],
        EventSource.addEventHandler(ev => {
          if (
            ev === DispatcherState_capacityExceeded ||
            ev === DispatcherState_completed
          ) {
            flowed[PauseableLike_pause]();
          } else if (ev === DispatcherState_ready) {
            flowed[PauseableLike_resume]();
          }
        }),
        Disposable.addTo(observer),
      );

      pipe(
        flowed,
        Observable.dispatchTo(dispatcher),
        invoke(ObservableLike_observe, observer),
      );

      flowed[PauseableLike_resume]();
    });

export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  <T>() =>
  (iterable: AsyncIterableLike<T>): FlowableLike<T> => ({
    [FlowableLike_flow]: (scheduler, options) =>
      AsyncIterable.toPauseableObservable<T>(scheduler, options)(iterable),
  });

export const fromSynchronousObservable: Signature["fromSynchronousObservable"] =

    <T>() =>
    (obs: SynchronousObservableLike<T>): FlowableLike<T> => ({
      [FlowableLike_flow]: (scheduler, options) =>
        Observable.toPauseableObservable<T>(scheduler, options)(obs),
    });
