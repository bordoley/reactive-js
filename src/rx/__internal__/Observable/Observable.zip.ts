import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Zip } from "../../../containers";
import Container_keepType from "../../../containers/__internal__/Container/Container.keepType";
import ReadonlyArray_every from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray_forEach from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.forEach";
import ReadonlyArray_keep from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.keep";
import ReadonlyArray_map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import ReadonlyArray_some from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.some";
import {
  compose,
  getOrRaise,
  isSome,
  isTrue,
  none,
  pipe,
} from "../../../functions";
import { EnumerableLike, EnumeratorLike } from "../../../ix";
import Enumerable_enumerate from "../../../ix/__internal__/Enumerable/Enumerable.enumerate";
import Enumerable_toRunnableObservable from "../../../ix/__internal__/Enumerable/Enumerable.toRunnableObservable";
import Enumerable_zip from "../../../ix/__internal__/Enumerable/Enumerable.zip";
import Enumerator_getCurrent from "../../../ix/__internal__/Enumerator/Enumerator.getCurrent";
import Enumerator_hasCurrent from "../../../ix/__internal__/Enumerator/Enumerator.hasCurrent";
import Enumerator_move from "../../../ix/__internal__/Enumerator/Enumerator.move";
import {
  ObservableLike,
  ObserverLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx";
import { DisposableLike_isDisposed } from "../../../util";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import EnumeratorSink_create from "../EnumeratorSink/EnumeratorSink.create";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import RunnableObservable_create from "../RunnableObservable/RunnableObservable.create";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable";
import Observable_allAreRunnable from "./Observable.allAreRunnable";
import Observable_create from "./Observable.create";
import Observable_isEnumerable from "./Observable.isEnumerable";
import Observable_toEnumerable from "./Observable.toEnumerable";

const Observable_zip: Zip<ObservableLike>["zip"] = /*@__PURE__*/ (() => {
  const typedObserverMixin = Observer_mixin();

  const shouldEmit = compose(
    ReadonlyArray_map(
      (x: EnumeratorLike) => Enumerator_hasCurrent(x) || Enumerator_move(x),
    ),
    ReadonlyArray_every(isTrue),
  );

  const shouldComplete = compose(
    ReadonlyArray_forEach<EnumeratorLike>(Enumerator_move),
    ReadonlyArray_some(Disposable_isDisposed),
  );

  const ZipObserver_delegate = Symbol("ZipObserver_delegate");
  const ZipObserver_enumerators = Symbol("ZipObserver_enumerators");
  const ZipObserver_sinkEnumerator = Symbol("ZipObserver_sinkEnumerator");

  type TProperties = {
    readonly [ZipObserver_delegate]: ObserverLike<readonly unknown[]>;
    readonly [ZipObserver_enumerators]: readonly EnumeratorLike<any>[];
    readonly [ZipObserver_sinkEnumerator]: EnumeratorLike & SinkLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));

        instance[ZipObserver_delegate] = delegate;
        instance[ZipObserver_sinkEnumerator] = sinkEnumerator;
        instance[ZipObserver_enumerators] = enumerators;

        pipe(
          instance,
          Disposable_onComplete(() => {
            if (
              Disposable_isDisposed(sinkEnumerator) ||
              (!Enumerator_hasCurrent(sinkEnumerator) &&
                !Enumerator_move(sinkEnumerator))
            ) {
              pipe(delegate, Disposable_dispose());
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ZipObserver_delegate]: none,
        [ZipObserver_enumerators]: none,
        [ZipObserver_sinkEnumerator]: none,
      }),
      {
        [SinkLike_notify](this: ObserverLike & TProperties, next: unknown) {
          const {
            [ZipObserver_sinkEnumerator]: sinkEnumerator,
            [ZipObserver_enumerators]: enumerators,
          } = this;
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          sinkEnumerator[SinkLike_notify](next);

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(
            enumerators,
            ReadonlyArray_map(Enumerator_getCurrent),
          );

          this[ZipObserver_delegate][SinkLike_notify](zippedNext);

          if (shouldComplete(enumerators)) {
            pipe(this, Disposable_dispose());
          }
        },
      },
    ),
  );

  const onSink =
    (observables: readonly ObservableLike[]) => (observer: ObserverLike) => {
      const enumerators: EnumeratorLike[] = [];

      for (const next of observables) {
        if (Observable_isEnumerable(next)) {
          const enumerator = pipe(
            next,
            Observable_toEnumerable(),
            getOrRaise(),
            Enumerable_enumerate(),
            Disposable_addTo(observer),
          );

          Enumerator_move(enumerator);
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(
            EnumeratorSink_create(),
            Disposable_addTo(observer),
          );
          enumerators.push(enumerator);

          pipe(
            createZipObserver(observer, enumerators, enumerator),
            Disposable_addTo(observer),
            Sink_sourceFrom(next),
          );
        }
      }
    };

  return (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly any[]> => {
    const isEnumerable = Observable_allAreEnumerable(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return isEnumerable
      ? pipe(
          observables,
          ReadonlyArray_map(Observable_toEnumerable()),
          Container_keepType({ keep: ReadonlyArray_keep }, isSome),
          enumerables =>
            (
              Enumerable_zip as unknown as (
                ...v: any[]
              ) => EnumerableLike<any[]>
            )(...enumerables),
          Enumerable_toRunnableObservable(),
        )
      : isRunnable
      ? RunnableObservable_create(onSink(observables))
      : Observable_create(onSink(observables));
  };
})();

export default Observable_zip;
