import { getLength, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import SinkLike__sourceFrom from "../../../rx/__internal__/SinkLike/SinkLike.sourceFrom";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import EnumerableObservableLike__create from "../EnumerableObservableLike/EnumerableObservableLike.create";
import ObserverLike__createWithDelegate from "../ObserverLike/ObserverLike.createWithDelegate";
import RunnableObservableLike__create from "../RunnableObservableLike/RunnableObservableLike.create";
import ObservableLike__allAreEnumerable from "./ObservableLike.allAreEnumerable";
import ObservableLike__allAreRunnable from "./ObservableLike.allAreRunnable";

const mergeAll = /*@__PURE__*/ (() => {
  const createMergeObserver = <T>(
    delegate: ObserverLike<T>,
    count: number,
    ctx: {
      completedCount: number;
    },
  ) =>
    pipe(
      ObserverLike__createWithDelegate(delegate),
      DisposableLike__addTo(delegate),
      DisposableLike__onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
          pipe(delegate, DisposableLike__dispose());
        }
      }),
    );

  return <T>(observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      const count = getLength(observables);
      const ctx = { completedCount: 0 };

      for (const observable of observables) {
        pipe(
          createMergeObserver(observer, count, ctx),
          SinkLike__sourceFrom(observable),
        );
      }
    };

    const isEnumerable = ObservableLike__allAreEnumerable(observables);
    const isRunnable = ObservableLike__allAreRunnable(observables);

    return isEnumerable
      ? EnumerableObservableLike__create(onSink)
      : isRunnable
      ? RunnableObservableLike__create(onSink)
      : ObservableLike__create(onSink);
  };
})();

export default mergeAll;
