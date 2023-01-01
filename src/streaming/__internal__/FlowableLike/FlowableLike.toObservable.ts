import { ignoreElements, startWith } from "../../../containers/ContainerLike";
import { toObservable as arrayToObservable } from "../../../containers/ReadonlyArrayLike";
import { compose, pipe } from "../../../functions";
import {
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx";
import {
  concatT,
  create as createObservable,
  forEach,
  keepT,
  onSubscribe,
} from "../../../rx/ObservableLike";
import { dispatchTo } from "../../../scheduling/DispatcherLike";
import { FlowableLike } from "../../../streaming";
import { sourceFrom } from "../../../streaming/StreamLike";
import { addTo } from "../../../util/DisposableLike";
import StreamLike__create from "../StreamLike/StreamLike.create";

const FlowableLike__toObservable: ToObservable<FlowableLike>["toObservable"] =
  () => src =>
    createObservable(observer => {
      const {
        [ObserverLike_dispatcher]: dispatcher,
        [ObserverLike_scheduler]: scheduler,
      } = observer;

      const op = compose(
        forEach(dispatchTo(dispatcher)),
        ignoreElements(keepT),
        startWith(
          {
            fromArray: arrayToObservable,
            ...concatT,
          },
          "pause",
          "resume",
        ),
        onSubscribe(() => dispatcher),
      );

      pipe(StreamLike__create(op, scheduler), sourceFrom(src), addTo(observer));
    });

export default FlowableLike__toObservable;
