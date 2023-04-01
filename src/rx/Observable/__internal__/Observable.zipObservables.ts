import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ZipObserver_enumerators,
  ZipObserver_queuedEnumerator,
} from "../../../__internal__/symbols.js";
import {
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.internal.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  ReadonlyArrayLike,
} from "../../../containers.js";
import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.some.js";
import { bindMethod, compose, isTrue, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../../rx/Enumerable/__internal__/Enumerable.enumerate.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
} from "../../../scheduling.js";
import {
  CollectionLike_count,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, {
  initObserverMixinFromDelegate,
} from "../../Observer/__internal__/Observer.mixin.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

interface QueuedEnumeratorLike<T = unknown>
  extends EnumeratorLike<T>,
    QueueableLike<T>,
    DisposableLike {}

const QueuedEnumerator_create: <T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => QueuedEnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, IndexedQueue_fifoQueueMixin<T>()),
      function QueuedEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          Mutable<TProperties>,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): EnumeratorLike<T> & QueueableLike<T> & DisposableLike {
        init(Disposable_mixin, instance);
        init(
          IndexedQueue_fifoQueueMixin<T>(),
          instance,
          capacity,
          backpressureStrategy,
        );

        pipe(
          instance,
          Disposable_onDisposed(() => {
            // FIXME: Maybe should clear the queue here as well to early
            // release references?
            instance[EnumeratorLike_hasCurrent] = false;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
      }),
      {
        [EnumeratorLike_move](
          this: DisposableLike & TProperties & QueueLike<T>,
        ) {
          if (this[CollectionLike_count] > 0) {
            const next = this[QueueLike_dequeue]() as T;
            this[EnumeratorLike_current] = next;
            this[EnumeratorLike_hasCurrent] = true;
          } else {
            this[EnumeratorLike_hasCurrent] = false;
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );
})();

const Observable_zipObservables = /*@__PURE__*/ (() => {
  const typedObserverMixin = Observer_mixin();

  const shouldEmit = compose(
    ReadonlyArray_map(
      (x: EnumeratorLike) =>
        x[EnumeratorLike_hasCurrent] || x[EnumeratorLike_move](),
    ),
    ReadonlyArray_every(isTrue),
  );

  const Enumerator_getCurrent = <T>(enumerator: EnumeratorLike<T>): T =>
    enumerator[EnumeratorLike_current];

  const Enumerator_hasCurrent = (enumerator: EnumeratorLike): boolean =>
    enumerator[EnumeratorLike_hasCurrent];

  const Enumerator_move =
    <TEnumerator extends EnumeratorLike<T>, T = unknown>() =>
    (enumerator: EnumeratorLike<T> & TEnumerator): boolean => {
      enumerator[EnumeratorLike_move]();
      return enumerator[EnumeratorLike_hasCurrent];
    };

  const shouldComplete = /*@__PURE__*/ (() =>
    compose(
      ReadonlyArray_forEach(Enumerator_move<EnumeratorLike & DisposableLike>()),
      ReadonlyArray_some(x => x[DisposableLike_isDisposed]),
    ))();

  type TProperties = {
    readonly [ZipObserver_enumerators]: readonly (EnumeratorLike<any> &
      DisposableLike)[];
    readonly [ZipObserver_queuedEnumerator]: QueuedEnumeratorLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin, delegatingMixin()),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly (EnumeratorLike<any> & DisposableLike)[],
        queuedEnumerator: QueuedEnumeratorLike,
      ): ObserverLike {
        init(Disposable_mixin, instance);
        initObserverMixinFromDelegate(instance, delegate);
        init(delegatingMixin(), instance, delegate);

        instance[ZipObserver_queuedEnumerator] = queuedEnumerator;
        instance[ZipObserver_enumerators] = enumerators;

        pipe(
          instance,
          Disposable_onComplete(() => {
            if (
              queuedEnumerator[DisposableLike_isDisposed] ||
              (!queuedEnumerator[EnumeratorLike_hasCurrent] &&
                !queuedEnumerator[EnumeratorLike_move]())
            ) {
              delegate[DisposableLike_dispose]();
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ZipObserver_enumerators]: none,
        [ZipObserver_queuedEnumerator]: none,
      }),
      {
        [ObserverLike_notify](
          this: ObserverLike &
            TProperties &
            DelegatingLike<ObserverLike<readonly unknown[]>>,
          next: unknown,
        ) {
          Observer_assertState(this);
          this[ZipObserver_queuedEnumerator][QueueableLike_enqueue](next);

          const enumerators = this[ZipObserver_enumerators];

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(
            enumerators,
            ReadonlyArray_map(Enumerator_getCurrent),
          );

          this[DelegatingLike_delegate][ObserverLike_notify](zippedNext);

          if (shouldComplete(enumerators)) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  );

  const moveAll = (enumerators: readonly EnumeratorLike[]) => {
    for (const enumerator of enumerators) {
      enumerator[EnumeratorLike_move]();
    }
  };

  const allHaveCurrent = (enumerators: readonly EnumeratorLike[]) =>
    pipe(enumerators, ReadonlyArray_every(Enumerator_hasCurrent));

  const enumerableOnSubscribe =
    (observables: readonly EnumerableLike[]) =>
    (observer: ObserverLike<ReadonlyArrayLike>) => {
      const enumerators = pipe(
        observables,
        ReadonlyArray_map(Enumerable_enumerate()),
        ReadonlyArray_forEach(Disposable_addTo(observer)),
      );

      const continuation = (ctx: ContinuationContextLike) => {
        while ((moveAll(enumerators), allHaveCurrent(enumerators))) {
          pipe(
            enumerators,
            ReadonlyArray_map(Enumerator_getCurrent),
            bindMethod(observer, ObserverLike_notify),
          );

          ctx[ContinuationContextLike_yield]();
        }
        observer[DisposableLike_dispose]();
      };

      pipe(observer, Observer_schedule(continuation));
    };

  const onSubscribe =
    (observables: readonly ObservableLike[]) =>
    (observer: ObserverLike<ReadonlyArrayLike>) => {
      const enumerators: (EnumeratorLike & DisposableLike)[] = [];

      for (const next of observables) {
        if (Observable_isEnumerable(next)) {
          const enumerator = pipe(
            next,
            Enumerable_enumerate(),
            Disposable_addTo(observer),
          );

          enumerator[EnumeratorLike_move]();
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(
            QueuedEnumerator_create(
              observer[QueueableLike_capacity],
              observer[QueueableLike_backpressureStrategy],
            ),
            Disposable_addTo(observer),
          );
          enumerators.push(enumerator);

          pipe(
            createZipObserver(observer, enumerators, enumerator),
            Disposable_addTo(observer),
            Observer_sourceFrom(next),
          );
        }
      }
    };

  return (
    observables: readonly ObservableLike<any>[],
  ): ObservableLike<readonly any[]> => {
    const isEnumerable = Observable_allAreEnumerable(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return isEnumerable
      ? Enumerable_create(enumerableOnSubscribe(observables))
      : isRunnable
      ? Runnable_create(onSubscribe(observables))
      : Observable_create(onSubscribe(observables));
  };
})();

export default Observable_zipObservables;
