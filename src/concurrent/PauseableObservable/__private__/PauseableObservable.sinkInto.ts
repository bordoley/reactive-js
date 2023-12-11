import {
  DispatcherLike,
  DispatcherLikeEventMap,
  DispatcherLikeEvent_capacityExceeded,
  DispatcherLikeEvent_completed,
  DispatcherLikeEvent_ready,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
} from "../../../concurrent.js";
import * as EventSource from "../../../events/EventSource.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import type * as PauseableObservable from "../../PauseableObservable.js";

const PauseableObservable_sinkInto: PauseableObservable.Signature["sinkInto"] =
  <T>(sink: DispatcherLike<T>) =>
  (pauseableObservable: PauseableObservableLike<T>) =>
    Observable.create(observer => {
      pipe(
        sink,
        EventSource.addEventHandler(
          (ev: DispatcherLikeEventMap[keyof DispatcherLikeEventMap]) => {
            if (
              ev === DispatcherLikeEvent_capacityExceeded ||
              ev === DispatcherLikeEvent_completed
            ) {
              pauseableObservable[PauseableLike_pause]();
            } else if (ev === DispatcherLikeEvent_ready) {
              pauseableObservable[PauseableLike_resume]();
            }
          },
        ),
        Disposable.addTo(observer),
      );

      pipe(
        pauseableObservable,
        Observable.dispatchTo(sink),
        Observable.subscribe(observer),
        Disposable.addTo(observer),
      );

      pauseableObservable[PauseableLike_resume]();
    });

export default PauseableObservable_sinkInto;
