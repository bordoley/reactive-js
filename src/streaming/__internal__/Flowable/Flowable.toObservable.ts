import Container_ignoreElements from "../../../containers/__internal__/Container/Container.ignoreElements";
import Container_startWith from "../../../containers/__internal__/Container/Container.startWith";
import { compose, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx";
import Observable_concat from "../../../rx/__internal__/Observable/Observable.concat";
import Observable_create from "../../../rx/__internal__/Observable/Observable.create";
import Observable_forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable_fromArray from "../../../rx/__internal__/Observable/Observable.fromArray";
import Observable_keep from "../../../rx/__internal__/Observable/Observable.keep";
import Observable_onSubscribe from "../../../rx/__internal__/Observable/Observable.onSubscribe";
import Dispatcher_dispatchTo from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo";
import { FlowableLike } from "../../../streaming";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Stream_create from "../Stream/Stream.create";
import Stream_sourceFrom from "../Stream/Stream.sourceFrom";

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
        Container_startWith<ObservableLike, string>(
          {
            fromArray: Observable_fromArray,
            concat: Observable_concat,
          },
          "pause",
          "resume",
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
