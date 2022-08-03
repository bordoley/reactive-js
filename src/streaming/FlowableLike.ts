import { ignoreElements, startWith } from "../containers/ContainerLike";
import { toObservable as arrayToObservable } from "../containers/ReadonlyArrayLike";
import { Function1, compose, pipe, returns } from "../functions";
import { HotObservableLike, ToObservable, createHotObservable } from "../rx";
import { concatT, keepT } from "../rx/HotObservableLike";
import { forEach, onSubscribe, toHotObservable } from "../rx/ObservableLike";
import { ObserverLike_dispatcher, ObserverLike_scheduler } from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import { FlowMode, FlowableLike, createStream } from "../streaming";
import { sourceFrom } from "../streaming/StreamLike";
import { addTo } from "../util/DisposableLike";

export const toObservable =
  <T>(): Function1<FlowableLike<T>, HotObservableLike<T>> =>
  src =>
    createHotObservable(observer => {
      const {
        [ObserverLike_dispatcher]: dispatcher,
        [ObserverLike_scheduler]: scheduler,
      } = observer;

      const op = compose(
        forEach<HotObservableLike, T>(dispatchTo(dispatcher)),
        ignoreElements<HotObservableLike, FlowMode>(keepT),
        startWith<HotObservableLike, FlowMode>(
          {
            fromArray: returns(compose(arrayToObservable(), toHotObservable())),
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
