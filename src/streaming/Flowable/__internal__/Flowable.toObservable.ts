import { compose, pipe, returns } from "../../../functions.js";
import {
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import {
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
} from "../../../scheduling.js";
import { FlowableLike, StreamableLike_isRunnable } from "../../../streaming.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queue_pushTo from "../../../util/Queue/__internal__/Queue.pushTo.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Stream_sourceFrom from "../../Stream/__internal__/Stream.sourceFrom.js";

const Flowable_toObservable: ToObservable<FlowableLike>["toObservable"] =
  () => src => {
    const create = src[StreamableLike_isRunnable]
      ? Runnable_create
      : Observable_create;

    return create(observer => {
      const dispatcher = observer[ObserverLike_dispatcher];
      const scheduler = observer[ObserverLike_scheduler];

      const op = compose(
        Observable_forEach(Queue_pushTo(dispatcher)),
        Observable_ignoreElements(),
        Observable_startWith(
          returns<PauseableState>(PauseableState_paused),
          returns(PauseableState_running),
        ),
        Observable_onSubscribe(() => dispatcher),
      );

      pipe(
        Stream_create(op, scheduler),
        Stream_sourceFrom(src),
        Disposable_addTo(observer),
      );
    });
  };

export default Flowable_toObservable;
