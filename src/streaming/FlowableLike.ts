import { createStream } from "../__internal__/streaming/__internal__StreamLike";
import { ignoreElements, startWith } from "../containers/ContainerLike";
import { toObservable as arrayToObservable } from "../containers/ReadonlyArrayLike";
import { compose, pipe } from "../functions";
import { ToObservable } from "../rx";
import {
  concatT,
  create as createObservable,
  forEach,
  keepT,
  onSubscribe,
} from "../rx/ObservableLike";
import { ObserverLike_dispatcher, ObserverLike_scheduler } from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import { FlowableLike } from "../streaming";
import { sourceFrom } from "../streaming/StreamLike";
import { addTo } from "../util/DisposableLike";

export const toObservable: ToObservable<FlowableLike>["toObservable"] =
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

      pipe(createStream(op, scheduler), sourceFrom(src), addTo(observer));
    });

export const toObservableT: ToObservable<FlowableLike> = {
  toObservable,
};
