import ContainerLike__ignoreElements from "../../../containers/__internal__/ContainerLike/ContainerLike.ignoreElements";
import ContainerLike__startWith from "../../../containers/__internal__/ContainerLike/ContainerLike.startWith";
import { compose, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx";
import ObservableLike__concat from "../../../rx/__internal__/ObservableLike/ObservableLike.concat";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__forEach from "../../../rx/__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__fromArray from "../../../rx/__internal__/ObservableLike/ObservableLike.fromArray";
import ObservableLike__keep from "../../../rx/__internal__/ObservableLike/ObservableLike.keep";
import ObservableLike__onSubscribe from "../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe";
import DispatcherLike__dispatchTo from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatchTo";
import { FlowableLike } from "../../../streaming";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import StreamLike__create from "../StreamLike/StreamLike.create";
import StreamLike__sourceFrom from "../StreamLike/StreamLike.sourceFrom";

const FlowableLike__toObservable: ToObservable<FlowableLike>["toObservable"] =
  () => src =>
    ObservableLike__create(observer => {
      const {
        [ObserverLike_dispatcher]: dispatcher,
        [ObserverLike_scheduler]: scheduler,
      } = observer;

      const op = compose(
        ObservableLike__forEach(DispatcherLike__dispatchTo(dispatcher)),
        ContainerLike__ignoreElements({ keep: ObservableLike__keep }),
        ContainerLike__startWith<ObservableLike, string>(
          {
            fromArray: ObservableLike__fromArray,
            concat: ObservableLike__concat,
          },
          "pause",
          "resume",
        ),
        ObservableLike__onSubscribe(() => dispatcher),
      );

      pipe(
        StreamLike__create(op, scheduler),
        StreamLike__sourceFrom(src),
        DisposableLike__addTo(observer),
      );
    });

export default FlowableLike__toObservable;
