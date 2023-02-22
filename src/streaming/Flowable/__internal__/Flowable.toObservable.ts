import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { Updater, compose, pipe, returns } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx.js";
import Observable_concat from "../../../rx/Observable/__internal__/Observable.concat.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import {
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
} from "../../../scheduling.js";
import Dispatcher_dispatchTo from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatchTo.js";
import { FlowableLike } from "../../../streaming.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Stream_sourceFrom from "../../Stream/__internal__/Stream.sourceFrom.js";

const Flowable_toObservable: ToObservable<FlowableLike>["toObservable"] =
  () => src =>
    Observable_create(observer => {
      const {
        [ObserverLike_dispatcher]: dispatcher,
        [ObserverLike_scheduler]: scheduler,
      } = observer;

      const op = compose(
        Observable_forEach(Dispatcher_dispatchTo(dispatcher)),
        Container_ignoreElements({ keep: Observable_keep }),
        Container_startWith<ObservableLike, Updater<PauseableState>>(
          {
            fromReadonlyArray: ReadonlyArray_toRunnableObservable,
            concat: Observable_concat,
          },
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

export default Flowable_toObservable;
