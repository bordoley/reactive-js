import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Zip } from "../../../containers";
import ContainerLike__keepType from "../../../containers/__internal__/ContainerLike/ContainerLike.keepType";
import ReadonlyArrayLike__every from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every";
import ReadonlyArrayLike__forEach from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach";
import ReadonlyArrayLike__keepT from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keepT";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import ReadonlyArrayLike__some from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.some";
import {
  compose,
  getOrRaise,
  isSome,
  isTrue,
  none,
  pipe,
} from "../../../functions";
import { EnumerableLike, EnumeratorLike } from "../../../ix";
import { enumerate } from "../../../ix/EnumerableLike";
import EnumerableLike__toRunnableObservable from "../../../ix/__internal__/EnumerableLike/EnumerableLike.toRunnableObservable";
import EnumerableLike__zip from "../../../ix/__internal__/EnumerableLike/EnumerableLike.zip";
import EnumeratorLike__getCurrent from "../../../ix/__internal__/EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__hasCurrent from "../../../ix/__internal__/EnumeratorLike/EnumeratorLike.hasCurrent";
import EnumeratorLike__move from "../../../ix/__internal__/EnumeratorLike/EnumeratorLike.move";
import {
  ObservableLike,
  ObserverLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import { getScheduler } from "../../ObserverLike";
import EnumeratorSinkLike__create from "../EnumeratorSinkLike/EnumeratorSinkLike.create";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import RunnableObservableLike__create from "../RunnableObservableLike/RunnableObservableLike.create";
import SinkLike__notify from "../SinkLike/SinkLike.notify";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";
import ObservableLike__allAreEnumerable from "./ObservableLike.allAreEnumerable";
import ObservableLike__allAreRunnable from "./ObservableLike.allAreRunnable";
import ObservableLike__create from "./ObservableLike.create";
import ObservableLike__isEnumerable from "./ObservableLike.isEnumerable";
import ObservableLike__toEnumerable from "./ObservableLike.toEnumerable";

const ObservableLike__zip: Zip<ObservableLike>["zip"] = /*@__PURE__*/ (() => {
  const typedObserverMixin = ObserverLike__mixin();

  const shouldEmit = compose(
    ReadonlyArrayLike__map(
      (x: EnumeratorLike) =>
        EnumeratorLike__hasCurrent(x) || EnumeratorLike__move(x),
    ),
    ReadonlyArrayLike__every(isTrue),
  );

  const shouldComplete = compose(
    ReadonlyArrayLike__forEach<EnumeratorLike>(EnumeratorLike__move),
    ReadonlyArrayLike__some(DisposableLike__isDisposed),
  );

  type TProperties = {
    readonly delegate: ObserverLike<readonly unknown[]>;
    readonly enumerators: readonly EnumeratorLike<any>[];
    readonly sinkEnumerator: EnumeratorLike & SinkLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(DisposableLike__mixin, typedObserverMixin),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, getScheduler(delegate));

        instance.delegate = delegate;
        instance.sinkEnumerator = sinkEnumerator;
        instance.enumerators = enumerators;

        pipe(
          instance,
          DisposableLike__onComplete(() => {
            if (
              DisposableLike__isDisposed(sinkEnumerator) ||
              (!EnumeratorLike__hasCurrent(sinkEnumerator) &&
                !EnumeratorLike__move(sinkEnumerator))
            ) {
              pipe(delegate, DisposableLike__dispose());
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
          if (DisposableLike__isDisposed(this)) {
            return;
          }

          pipe(sinkEnumerator, SinkLike__notify(next));

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(
            enumerators,
            ReadonlyArrayLike__map(EnumeratorLike__getCurrent),
          );
          pipe(this.delegate, SinkLike__notify(zippedNext));

          if (shouldComplete(enumerators)) {
            pipe(this, DisposableLike__dispose());
          }
        },
      },
    ),
  );

  const onSink =
    (observables: readonly ObservableLike[]) => (observer: ObserverLike) => {
      const enumerators: EnumeratorLike[] = [];

      for (const next of observables) {
        if (ObservableLike__isEnumerable(next)) {
          const enumerator = pipe(
            next,
            ObservableLike__toEnumerable(),
            getOrRaise(),
            enumerate(),
            DisposableLike__addTo(observer),
          );

          EnumeratorLike__move(enumerator);
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(
            EnumeratorSinkLike__create(),
            DisposableLike__addTo(observer),
          );
          enumerators.push(enumerator);

          pipe(
            createZipObserver(observer, enumerators, enumerator),
            DisposableLike__addTo(observer),
            SinkLike__sourceFrom(next),
          );
        }
      }
    };

  return (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly any[]> => {
    const isEnumerable = ObservableLike__allAreEnumerable(observables);
    const isRunnable = ObservableLike__allAreRunnable(observables);

    return isEnumerable
      ? pipe(
          observables,
          ReadonlyArrayLike__map(ObservableLike__toEnumerable()),
          ContainerLike__keepType(ReadonlyArrayLike__keepT, isSome),
          enumerables =>
            (
              EnumerableLike__zip as unknown as (
                ...v: any[]
              ) => EnumerableLike<any[]>
            )(...enumerables),
          EnumerableLike__toRunnableObservable(),
        )
      : isRunnable
      ? RunnableObservableLike__create(onSink(observables))
      : ObservableLike__create(onSink(observables));
  };
})();

export default ObservableLike__zip;
