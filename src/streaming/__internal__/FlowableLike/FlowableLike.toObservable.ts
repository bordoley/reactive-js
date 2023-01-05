import { ignoreElements, startWith } from "../../../containers/ContainerLike";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import { compose, pipe } from "../../../functions";
import {
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx";
import ObservableLike__concatT from "../../../rx/__internal__/ObservableLike/ObservableLike.concatT";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__forEach from "../../../rx/__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__keepT from "../../../rx/__internal__/ObservableLike/ObservableLike.keepT";
import ObservableLike__onSubscribe from "../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe";
import { dispatchTo } from "../../../scheduling/DispatcherLike";
import { FlowableLike } from "../../../streaming";
import { sourceFrom } from "../../../streaming/StreamLike";
import { addTo } from "../../../util/DisposableLike";
import StreamLike__create from "../StreamLike/StreamLike.create";

const FlowableLike__toObservable: ToObservable<FlowableLike>["toObservable"] =
  () => src =>
    ObservableLike__create(observer => {
      const {
        [ObserverLike_dispatcher]: dispatcher,
        [ObserverLike_scheduler]: scheduler,
      } = observer;

      const op = compose(
        ObservableLike__forEach(dispatchTo(dispatcher)),
        ignoreElements(ObservableLike__keepT),
        startWith(
          {
            fromArray: ReadonlyArrayLike__toRunnableObservable,
            ...ObservableLike__concatT,
          },
          "pause",
          "resume",
        ),
        ObservableLike__onSubscribe(() => dispatcher),
      );

      pipe(StreamLike__create(op, scheduler), sourceFrom(src), addTo(observer));
    });

export default FlowableLike__toObservable;
