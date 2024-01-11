import {
  DispatcherLike,
  DispatcherLikeEvent_capacityExceeded,
  DispatcherLikeEvent_completed,
  DispatcherLikeEvent_ready,
  FlowableLike,
  FlowableLike_flow,
  ObservableLike_observe,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../concurrent.js";
import * as EventSource from "../../../events/EventSource.js";
import { invoke, pipe } from "../../../functions.js";
import {
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
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
        dispatcher,
        EventSource.addEventHandler(ev => {
          if (
            ev === DispatcherLikeEvent_capacityExceeded ||
            ev === DispatcherLikeEvent_completed
          ) {
            flowed[PauseableLike_pause]();
          } else if (ev === DispatcherLikeEvent_ready) {
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
