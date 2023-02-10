import { Concat } from "../../../containers";
import { getLength, isEmpty, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable";
import Observable_allAreRunnable from "./Observable.allAreRunnable";
import Observable_create from "./Observable.create";

const Observable_concat: Concat<ObservableLike>["concat"] = /*@__PURE__*/ (<
  T,
>() => {
  const createConcatObserver = <T>(
    delegate: ObserverLike<T>,
    observables: readonly ObservableLike<T>[],
    next: number,
  ) =>
    pipe(
      Observer_createWithDelegate(delegate),
      Disposable_addTo(delegate),
      Disposable_onComplete(() => {
        if (next < getLength(observables)) {
          pipe(
            createConcatObserver(delegate, observables, next + 1),
            Sink_sourceFrom(observables[next]),
          );
        } else {
          pipe(delegate, Disposable_dispose());
        }
      }),
    );

  return (...observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      if (!isEmpty(observables)) {
        pipe(
          createConcatObserver(observer, observables, 1),
          Sink_sourceFrom(observables[0]),
        );
      } else {
        pipe(observer, Disposable_dispose());
      }
    };

    const isEnumerable = Observable_allAreEnumerable(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return Observable_create(onSink, isEnumerable, isRunnable);
  };
})();

export default Observable_concat;
