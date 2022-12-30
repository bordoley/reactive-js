import {
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
} from "../../../__internal__/rx/ObservableLike.create";
import { getLength, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import SinkLike__sourceFrom from "../../../rx/__internal__/SinkLike/SinkLike.sourceFrom";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import ObserverLike__createWithDelegate from "../ObserverLike/ObserverLike.createWithDelegate";
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
      ? createEnumerableObservable(onSink)
      : isRunnable
      ? createRunnableObservable(onSink)
      : createObservable(onSink);
  };
})();

export default mergeAll;
