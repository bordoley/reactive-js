import { Concat } from "../../containers";
import { every, map as mapArray } from "../../containers/ReadonlyArrayLike";
import { compose, getLength, isTrue, pipe } from "../../functions";
import { ObservableLike, ObserverLike } from "../../rx";
import { sourceFrom } from "../../rx/SinkLike";
import ObservableLike__isEnumerable from "../../rx/__internal__/ObservableLike/ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "../../rx/__internal__/ObservableLike/ObservableLike.isRunnable";
import ObserverLike__createWithDelegate from "../../rx/__internal__/ObserverLike/ObserverLike.createWithDelegate";
import DisposableLike__addTo from "../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__onComplete from "../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import {
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
} from "./ObservableLike.create";

export const allAreEnumerable = compose(
  mapArray(ObservableLike__isEnumerable),
  every(isTrue),
);

export const allAreRunnable = compose(
  mapArray(ObservableLike__isRunnable),
  every(isTrue),
);

export const mergeImpl = /*@__PURE__*/ (() => {
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
        pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
      }
    };

    const isEnumerable = allAreEnumerable(observables);
    const isRunnable = allAreRunnable(observables);

    return isEnumerable
      ? createEnumerableObservable(onSink)
      : isRunnable
      ? createRunnableObservable(onSink)
      : createObservable(onSink);
  };
})();

export const merge: Concat<ObservableLike>["concat"] = <T>(
  ...observables: ObservableLike<T>[]
) => mergeImpl(observables);
export const mergeT: Concat<ObservableLike> = {
  concat: merge,
};
