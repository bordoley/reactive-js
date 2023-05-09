import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import EventSource_addEventHandler from "../../EventSource/__internal__/EventSource.addEventHandler.js";
import Observable_dispatchTo from "../../Observable/__internal__/Observable.dispatchTo.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import { Function1, pipe } from "../../functions.js";
import {
  DeferredObservableLike,
  DispatcherLike,
  DispatcherLikeEventMap,
  DispatcherLikeEvent_capacityExceeded,
  DispatcherLikeEvent_completed,
  DispatcherLikeEvent_ready,
  ObservableContainer,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
} from "../../types.js";

const PauseableObservable_sinkInto =
  <T>(
    sink: DispatcherLike<T>,
  ): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>> =>
  pauseableObservable =>
    DeferredObservable_create(observer => {
      pipe(
        sink,
        EventSource_addEventHandler(
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
        Disposable_addTo(observer),
      );

      pipe(
        pauseableObservable,
        Observable_dispatchTo<ObservableContainer>(sink),
        Observable_subscribe(observer),
        Disposable_addTo(observer),
      );

      pauseableObservable[PauseableLike_resume]();
    });

export default PauseableObservable_sinkInto;
