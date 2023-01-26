import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Zip } from "../../../containers";
import Container$keepType from "../../../containers/__internal__/Container/Container.keepType";
import ReadonlyArray$every from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray$forEach from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.forEach";
import ReadonlyArray$keep from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.keep";
import ReadonlyArray$map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import ReadonlyArray$some from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.some";
import {
  compose,
  getOrRaise,
  isSome,
  isTrue,
  none,
  pipe,
} from "../../../functions";
import { EnumerableLike, EnumeratorLike } from "../../../ix";
import Enumerable$enumerate from "../../../ix/__internal__/Enumerable/Enumerable.enumerate";
import Enumerable$toRunnableObservable from "../../../ix/__internal__/Enumerable/Enumerable.toRunnableObservable";
import Enumerable$zip from "../../../ix/__internal__/Enumerable/Enumerable.zip";
import Enumerator$getCurrent from "../../../ix/__internal__/Enumerator/Enumerator.getCurrent";
import Enumerator$hasCurrent from "../../../ix/__internal__/Enumerator/Enumerator.hasCurrent";
import Enumerator$move from "../../../ix/__internal__/Enumerator/Enumerator.move";
import {
  ObservableLike,
  ObserverLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import EnumeratorSink$create from "../EnumeratorSink/EnumeratorSink.create";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import RunnableObservable$create from "../RunnableObservable/RunnableObservable.create";
import Sink$notify from "../Sink/Sink.notify";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";
import Observable$allAreEnumerable from "./Observable.allAreEnumerable";
import Observable$allAreRunnable from "./Observable.allAreRunnable";
import Observable$create from "./Observable.create";
import Observable$isEnumerable from "./Observable.isEnumerable";
import Observable$toEnumerable from "./Observable.toEnumerable";

const Observable$zip: Zip<ObservableLike>["zip"] = /*@__PURE__*/ (() => {
  const typedObserverMixin = Observer$mixin();

  const shouldEmit = compose(
    ReadonlyArray$map(
      (x: EnumeratorLike) => Enumerator$hasCurrent(x) || Enumerator$move(x),
    ),
    ReadonlyArray$every(isTrue),
  );

  const shouldComplete = compose(
    ReadonlyArray$forEach<EnumeratorLike>(Enumerator$move),
    ReadonlyArray$some(Disposable$isDisposed),
  );

  type TProperties = {
    readonly delegate: ObserverLike<readonly unknown[]>;
    readonly enumerators: readonly EnumeratorLike<any>[];
    readonly sinkEnumerator: EnumeratorLike & SinkLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(Disposable$mixin, typedObserverMixin),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(Disposable$mixin, instance);
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));

        instance.delegate = delegate;
        instance.sinkEnumerator = sinkEnumerator;
        instance.enumerators = enumerators;

        pipe(
          instance,
          Disposable$onComplete(() => {
            if (
              Disposable$isDisposed(sinkEnumerator) ||
              (!Enumerator$hasCurrent(sinkEnumerator) &&
                !Enumerator$move(sinkEnumerator))
            ) {
              pipe(delegate, Disposable$dispose());
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
      }),
      {
        [SinkLike_notify](this: ObserverLike & TProperties, next: unknown) {
          const { sinkEnumerator, enumerators } = this;
          if (Disposable$isDisposed(this)) {
            return;
          }

          pipe(sinkEnumerator, Sink$notify(next));

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(
            enumerators,
            ReadonlyArray$map(Enumerator$getCurrent),
          );
          pipe(this.delegate, Sink$notify(zippedNext));

          if (shouldComplete(enumerators)) {
            pipe(this, Disposable$dispose());
          }
        },
      },
    ),
  );

  const onSink =
    (observables: readonly ObservableLike[]) => (observer: ObserverLike) => {
      const enumerators: EnumeratorLike[] = [];

      for (const next of observables) {
        if (Observable$isEnumerable(next)) {
          const enumerator = pipe(
            next,
            Observable$toEnumerable(),
            getOrRaise(),
            Enumerable$enumerate(),
            Disposable$addTo(observer),
          );

          Enumerator$move(enumerator);
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(
            EnumeratorSink$create(),
            Disposable$addTo(observer),
          );
          enumerators.push(enumerator);

          pipe(
            createZipObserver(observer, enumerators, enumerator),
            Disposable$addTo(observer),
            Sink$sourceFrom(next),
          );
        }
      }
    };

  return (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly any[]> => {
    const isEnumerable = Observable$allAreEnumerable(observables);
    const isRunnable = Observable$allAreRunnable(observables);

    return isEnumerable
      ? pipe(
          observables,
          ReadonlyArray$map(Observable$toEnumerable()),
          Container$keepType({ keep: ReadonlyArray$keep }, isSome),
          enumerables =>
            (
              Enumerable$zip as unknown as (
                ...v: any[]
              ) => EnumerableLike<any[]>
            )(...enumerables),
          Enumerable$toRunnableObservable(),
        )
      : isRunnable
      ? RunnableObservable$create(onSink(observables))
      : Observable$create(onSink(observables));
  };
})();

export default Observable$zip;
