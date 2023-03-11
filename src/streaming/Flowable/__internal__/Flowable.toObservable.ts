import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose, pipe } from "../../../functions.js";
import {
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import {
  PauseableState_paused,
  PauseableState_running,
} from "../../../scheduling.js";
import { FlowableLike, StreamableLike_isRunnable } from "../../../streaming.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queueable_pushTo from "../../../util/Queue/__internal__/Queueable.pushTo.js";
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
        Observable_forEach(Queueable_pushTo(dispatcher)),
        Observable_ignoreElements(),
        // Intentionally use mergeWith here. The stream dispatcher
        // needs to be immediately subscribed to when created
        // otherwise it will have no dispatcher to queue events onto.
        // Observable.startWith uses concatenation.
        Observable_mergeWith(
          pipe(
            [PauseableState_paused, PauseableState_running],
            ReadonlyArray_toObservable(),
          ),
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
