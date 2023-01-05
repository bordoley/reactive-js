import { Concat } from "../../../containers";
import { getLength, isEmpty, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import ObserverLike__createWithDelegate from "../ObserverLike/ObserverLike.createWithDelegate";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";
import ObservableLike__allAreEnumerable from "./ObservableLike.allAreEnumerable";
import ObservableLike__allAreRunnable from "./ObservableLike.allAreRunnable";
import ObservableLike__create from "./ObservableLike.create";

const ObservableLike__concat: Concat<ObservableLike>["concat"] =
  /*@__PURE__*/ (<T>() => {
    const createConcatObserver = <T>(
      delegate: ObserverLike<T>,
      observables: readonly ObservableLike<T>[],
      next: number,
    ) =>
      pipe(
        ObserverLike__createWithDelegate(delegate),
        DisposableLike__addTo(delegate),
        DisposableLike__onComplete(() => {
          if (next < getLength(observables)) {
            pipe(
              createConcatObserver(delegate, observables, next + 1),
              SinkLike__sourceFrom(observables[next]),
            );
          } else {
            pipe(delegate, DisposableLike__dispose());
          }
        }),
      );

    return (
      ...observables: readonly ObservableLike<T>[]
    ): ObservableLike<T> => {
      const onSink = (observer: ObserverLike<T>) => {
        if (!isEmpty(observables)) {
          pipe(
            createConcatObserver(observer, observables, 1),
            SinkLike__sourceFrom(observables[0]),
          );
        } else {
          pipe(observer, DisposableLike__dispose());
        }
      };

      const isEnumerable = ObservableLike__allAreEnumerable(observables);
      const isRunnable = ObservableLike__allAreRunnable(observables);

      return ObservableLike__create(onSink, isEnumerable, isRunnable);
    };
  })();

export default ObservableLike__concat;
