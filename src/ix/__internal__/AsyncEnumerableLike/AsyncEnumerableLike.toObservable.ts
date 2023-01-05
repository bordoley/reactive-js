import { none, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import { ToObservable } from "../../../rx";
import { sinkInto } from "../../../rx/ReactiveContainerLike";
import ObservableLike__forEach from "../../../rx/__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__onSubscribe from "../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe";
import ObserverLike__getScheduler from "../../../rx/__internal__/ObserverLike/ObserverLike.getScheduler";
import RunnableObservableLike__create from "../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create";
import { dispatch } from "../../../scheduling/DispatcherLike";
import { stream } from "../../../streaming/StreamableLike";
import { addTo } from "../../../util/DisposableLike";

const AsyncEnumerable__toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  () => enumerable =>
    RunnableObservableLike__create(observer => {
      const enumerator = pipe(
        enumerable,
        stream(ObserverLike__getScheduler(observer)),
        addTo(observer),
      );

      pipe(
        enumerator,
        ObservableLike__forEach(_ => {
          pipe(enumerator, dispatch(none));
        }),
        ObservableLike__onSubscribe(() => {
          pipe(enumerator, dispatch(none));
        }),
        sinkInto(observer),
      );
    });

export default AsyncEnumerable__toObservable;
