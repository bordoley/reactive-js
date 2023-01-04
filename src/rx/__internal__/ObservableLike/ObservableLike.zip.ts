import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Zip } from "../../../containers";
import { keepType } from "../../../containers/ContainerLike";
import { every, some } from "../../../containers/ReadonlyArrayLike";
import ReadonlyArrayLike__forEach from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach";
import ReadonlyArrayLike__keepT from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keepT";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
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
import { getCurrent, hasCurrent, move } from "../../../ix/EnumeratorLike";
import EnumerableLike__toRunnableObservable from "../../../ix/__internal__/EnumerableLike/EnumerableLike.toRunnableObservable";
import EnumerableLike__zip from "../../../ix/__internal__/EnumerableLike/EnumerableLike.zip";
import {
  ObservableLike,
  ObserverLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx";
import {
  addTo,
  dispose,
  isDisposed,
  onComplete,
} from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { getScheduler } from "../../ObserverLike";
import { notify, sourceFrom } from "../../SinkLike";
import EnumeratorSinkLike__create from "../EnumeratorSinkLike/EnumeratorSinkLike.create";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import RunnableObservableLike__create from "../RunnableObservableLike/RunnableObservableLike.create";
import ObservableLike__allAreEnumerable from "./ObservableLike.allAreEnumerable";
import ObservableLike__allAreRunnable from "./ObservableLike.allAreRunnable";
import ObservableLike__create from "./ObservableLike.create";
import ObservableLike__isEnumerable from "./ObservableLike.isEnumerable";
import ObservableLike__toEnumerable from "./ObservableLike.toEnumerable";

const ObservableLike__zip: Zip<ObservableLike>["zip"] = /*@__PURE__*/ (() => {
  const typedObserverMixin = ObserverLike__mixin();

  const shouldEmit = compose(
    ReadonlyArrayLike__map((x: EnumeratorLike) => hasCurrent(x) || move(x)),
    every(isTrue),
  );

  const shouldComplete = compose(
    ReadonlyArrayLike__forEach<EnumeratorLike>(move),
    some(isDisposed),
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
          onComplete(() => {
            if (
              isDisposed(sinkEnumerator) ||
              (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))
            ) {
              pipe(delegate, dispose());
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
          if (isDisposed(this)) {
            return;
          }

          pipe(sinkEnumerator, notify(next));

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(
            enumerators,
            ReadonlyArrayLike__map(getCurrent),
          );
          pipe(this.delegate, notify(zippedNext));

          if (shouldComplete(enumerators)) {
            pipe(this, dispose());
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
            addTo(observer),
          );

          move(enumerator);
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(
            EnumeratorSinkLike__create(),
            addTo(observer),
          );
          enumerators.push(enumerator);

          pipe(
            createZipObserver(observer, enumerators, enumerator),
            addTo(observer),
            sourceFrom(next),
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
          keepType(ReadonlyArrayLike__keepT, isSome),
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
