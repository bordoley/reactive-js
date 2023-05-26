import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_zipMany from "../../Enumerator/__internal__/Enumerator.zipMany.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Queue_indexedQueueMixin from "../../Queue/__internal__/Queue.indexedQueueMixin.js";
import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_forEach from "../../ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_someSatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.someSatisfy.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __ZipObserver_queuedEnumerator } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  IndexedQueueLike,
  QueueLike_dequeue,
  ZipLike_enumerators,
} from "../../__internal__/types.js";
import {
  bindMethod,
  compose,
  isTrue,
  none,
  pipe,
  pipeLazy,
} from "../../functions.js";
import {
  CollectionLike_count,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumerableBaseLike,
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
  ObservableBaseLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
  SinkLike_notify,
} from "../../types.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_enumerate from "./Observable.enumerate.js";
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
    [EnumeratorLike_isCompleted]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, Queue_indexedQueueMixin<T>()),
      function QueuedEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          Mutable<TProperties>,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): EnumeratorLike<T> & QueueableLike<T> & DisposableLike {
        init(Disposable_mixin, instance);
        init(
          Queue_indexedQueueMixin<T>(),
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
            instance[EnumeratorLike_isCompleted] = true;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [EnumeratorLike_isCompleted]: false,
      }),
      {
        [EnumeratorLike_move](
          this: DisposableLike & TProperties & IndexedQueueLike<T>,
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

const Enumerable_zipMany = (
  observables: readonly EnumerableLike<unknown>[],
  config: Pick<EnumerableBaseLike, typeof ObservableLike_isPure>,
) =>
  EnumerableBase_create(
    pipeLazy(
      observables,
      ReadonlyArray_map(Observable_enumerate()),
      Enumerator_zipMany,
    ),
    config,
  );

const Observable_zipMany = /*@__PURE__*/ (() => {
  const shouldEmit = compose(
    ReadonlyArray_map(
      (x: EnumeratorLike) =>
        x[EnumeratorLike_hasCurrent] || x[EnumeratorLike_move](),
    ),
    ReadonlyArray_everySatisfy(isTrue),
  );

  const Enumerator_getCurrent = <T>(enumerator: EnumeratorLike<T>): T =>
    enumerator[EnumeratorLike_current];

  const Enumerator_move =
    <TEnumerator extends EnumeratorLike<T>, T = unknown>() =>
    (enumerator: EnumeratorLike<T> & TEnumerator): boolean =>
      enumerator[EnumeratorLike_move]();

  const shouldComplete = /*@__PURE__*/ (() =>
    compose(
      ReadonlyArray_forEach(Enumerator_move<EnumeratorLike>()),
      ReadonlyArray_someSatisfy(x => x[EnumeratorLike_isCompleted]),
    ))();

  type TProperties = {
    readonly [ZipLike_enumerators]: readonly EnumeratorLike<any>[];
    readonly [__ZipObserver_queuedEnumerator]: QueuedEnumeratorLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, Observer_mixin(), Delegating_mixin()),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        queuedEnumerator: QueuedEnumeratorLike,
      ): ObserverLike {
        init(Disposable_mixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        instance[__ZipObserver_queuedEnumerator] = queuedEnumerator;
        instance[ZipLike_enumerators] = enumerators;

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
        [ZipLike_enumerators]: none,
        [__ZipObserver_queuedEnumerator]: none,
      }),
      {
        [SinkLike_notify](
          this: ObserverLike &
            TProperties &
            DelegatingLike<ObserverLike<readonly unknown[]>>,
          next: unknown,
        ) {
          Observer_assertState(this);
          this[__ZipObserver_queuedEnumerator][QueueableLike_enqueue](next);

          const enumerators = this[ZipLike_enumerators];

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(
            enumerators,
            ReadonlyArray_map(Enumerator_getCurrent),
          );

          this[DelegatingLike_delegate][SinkLike_notify](zippedNext);

          if (shouldComplete(enumerators)) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  );

  const onSubscribe =
    (observables: readonly ObservableBaseLike[]) =>
    (observer: ObserverLike<ReadonlyArray<unknown>>) => {
      const enumerators: EnumeratorLike[] = [];

      for (const next of observables) {
        if (Observable_isEnumerable(next)) {
          const enumerator = pipe(
            next,
            Observable_enumerate(),
            Disposable_addTo(observer),
          );

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
            bindMethod(next, ObservableLike_observe),
          );
        }
      }
    };

  return (
    observables: readonly ObservableBaseLike<any>[],
  ): ObservableBaseLike<readonly any[]> => {
    const isDeferred = Observable_allAreDeferred(observables);
    const isEnumerable = Observable_allAreEnumerable(observables);
    const isPure = Observable_allArePure(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    const pureConfig = {
      [ObservableLike_isPure]: isPure,
    };

    return isEnumerable && isRunnable && isDeferred
      ? Enumerable_zipMany(observables, pureConfig)
      : Observable_createWithConfig(onSubscribe(observables), {
          [ObservableLike_isDeferred]:
            isDeferred || (!isDeferred && !isPure && !isRunnable),
          [ObservableLike_isPure]: isPure,
          [ObservableLike_isRunnable]: isRunnable,
        });
  };
})();

export default Observable_zipMany;
