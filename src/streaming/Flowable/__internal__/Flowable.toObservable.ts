import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements";
import Container_startWith from "../../../containers/Container/__internal__/Container.startWith";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import { Updater, compose, pipe, returns } from "../../../functions";
import {
  ObservableLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx";
import Observable_concat from "../../../rx/Observable/__internal__/Observable.concat";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe";
import {
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
} from "../../../scheduling";
import Dispatcher_dispatchTo from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatchTo";
import { FlowableLike } from "../../../streaming";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Stream_create from "../../Stream/__internal__/Stream.create";
import Stream_sourceFrom from "../../Stream/__internal__/Stream.sourceFrom";

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
