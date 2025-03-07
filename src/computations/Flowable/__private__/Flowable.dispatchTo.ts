import * as EventSource from "../../../computations/EventSource.js";
import {
  DispatcherLike,
  DispatcherLike_state,
  DispatcherState_capacityExceeded,
  DispatcherState_completed,
  DispatcherState_ready,
  FlowableLike,
  FlowableLike_flow,
  ObservableLike_observe,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";

const Flowable_dispatchTo: Flowable.Signature["dispatchTo"] =
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

export default Flowable_dispatchTo;
