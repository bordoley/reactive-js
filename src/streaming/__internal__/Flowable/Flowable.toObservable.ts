import Container$ignoreElements from "../../../containers/__internal__/Container/Container.ignoreElements";
import Container$startWith from "../../../containers/__internal__/Container/Container.startWith";
import { compose, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx";
import Observable$concat from "../../../rx/__internal__/Observable/Observable.concat";
import Observable$create from "../../../rx/__internal__/Observable/Observable.create";
import Observable$forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable$fromArray from "../../../rx/__internal__/Observable/Observable.fromArray";
import Observable$keep from "../../../rx/__internal__/Observable/Observable.keep";
import Observable$onSubscribe from "../../../rx/__internal__/Observable/Observable.onSubscribe";
import Dispatcher$dispatchTo from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo";
import { FlowableLike } from "../../../streaming";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Stream$create from "../Stream/Stream.create";
import Stream$sourceFrom from "../Stream/Stream.sourceFrom";

const Flowable$toObservable: ToObservable<FlowableLike>["toObservable"] =
  () => src =>
    Observable$create(observer => {
      const {
        [ObserverLike_dispatcher]: dispatcher,
        [ObserverLike_scheduler]: scheduler,
      } = observer;

      const op = compose(
        Observable$forEach(Dispatcher$dispatchTo(dispatcher)),
        Container$ignoreElements({ keep: Observable$keep }),
        Container$startWith<ObservableLike, string>(
          {
            fromArray: Observable$fromArray,
            concat: Observable$concat,
          },
          "pause",
          "resume",
        ),
        Observable$onSubscribe(() => dispatcher),
      );

      pipe(
        Stream$create(op, scheduler),
        Stream$sourceFrom(src),
        Disposable$addTo(observer),
      );
    });

export default Flowable$toObservable;
