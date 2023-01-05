import { none, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import { ToObservable } from "../../../rx";
import ObservableLike__forEach from "../../../rx/__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__onSubscribe from "../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe";
import ObserverLike__getScheduler from "../../../rx/__internal__/ObserverLike/ObserverLike.getScheduler";
import ReactiveContainerLike__sinkInto from "../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import RunnableObservableLike__create from "../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create";
import DispatcherLike__dispatch from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch";
import { stream } from "../../../streaming/StreamableLike";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";

const AsyncEnumerable__toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  () => enumerable =>
    RunnableObservableLike__create(observer => {
      const enumerator = pipe(
        enumerable,
        stream(ObserverLike__getScheduler(observer)),
        DisposableLike__addTo(observer),
      );

      pipe(
        enumerator,
        ObservableLike__forEach(_ => {
          pipe(enumerator, DispatcherLike__dispatch(none));
        }),
        ObservableLike__onSubscribe(() => {
          pipe(enumerator, DispatcherLike__dispatch(none));
        }),
        ReactiveContainerLike__sinkInto(observer),
      );
    });

export default AsyncEnumerable__toObservable;
