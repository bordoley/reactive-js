import { Concat } from "../../../containers";
import { getLength, isEmpty, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Observer$createWithDelegate from "../Observer/Observer.createWithDelegate";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";
import Observable$allAreEnumerable from "./Observable.allAreEnumerable";
import Observable$allAreRunnable from "./Observable.allAreRunnable";
import Observable$create from "./Observable.create";

const Observable$concat: Concat<ObservableLike>["concat"] = /*@__PURE__*/ (<
  T,
>() => {
  const createConcatObserver = <T>(
    delegate: ObserverLike<T>,
    observables: readonly ObservableLike<T>[],
    next: number,
  ) =>
    pipe(
      Observer$createWithDelegate(delegate),
      Disposable$addTo(delegate),
      Disposable$onComplete(() => {
        if (next < getLength(observables)) {
          pipe(
            createConcatObserver(delegate, observables, next + 1),
            Sink$sourceFrom(observables[next]),
          );
        } else {
          pipe(delegate, Disposable$dispose());
        }
      }),
    );

  return (...observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      if (!isEmpty(observables)) {
        pipe(
          createConcatObserver(observer, observables, 1),
          Sink$sourceFrom(observables[0]),
        );
      } else {
        pipe(observer, Disposable$dispose());
      }
    };

    const isEnumerable = Observable$allAreEnumerable(observables);
    const isRunnable = Observable$allAreRunnable(observables);

    return Observable$create(onSink, isEnumerable, isRunnable);
  };
})();

export default Observable$concat;
