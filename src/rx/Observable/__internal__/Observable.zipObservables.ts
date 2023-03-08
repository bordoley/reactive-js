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
import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.some.js";
import { compose, isTrue, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../../rx/Enumerable/__internal__/Enumerable.enumerate.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  QueueLike,
  QueueLike_count,
  QueueLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notifyObserver from "../../Observer/__internal__/Observer.notifyObserver.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

export interface QueuedEnumeratorLike<T = unknown>
  extends EnumeratorLike<T>,
    QueueLike<T>,
    DisposableLike {}

const QueuedEnumerator_create: <T>() => QueuedEnumeratorLike<T> =
  /*@__PURE__*/ (<T>() => {
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
        ): EnumeratorLike<T> & QueueLike<T> & DisposableLike {
          init(Disposable_mixin, instance);
          init(IndexedQueue_fifoQueueMixin<T>(), instance);

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
            this: DisposableLike & TProperties & PullableQueueLike<T>,
          ) {
            if (this[QueueLike_count] > 0) {
              const next = this[PullableQueueLike_pull]() as T;
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

  const shouldComplete = compose(
    ReadonlyArray_forEach(Enumerator_move<EnumeratorLike & DisposableLike>()),
    ReadonlyArray_some(x => x[DisposableLike_isDisposed]),
  );

  const ZipObserver_enumerators = Symbol("ZipObserver_enumerators");
  const ZipObserver_queuedEnumerator = Symbol("ZipObserver_queuedEnumerator");

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
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
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

          const {
            [ZipObserver_queuedEnumerator]: queuedEnumerator,
            [ZipObserver_enumerators]: enumerators,
          } = this;
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          queuedEnumerator[QueueLike_push](next);

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
    (observer: ObserverLike<ReadonlyArray<unknown>>) => {
      const enumerators = pipe(
        observables,
        ReadonlyArray_map(Enumerable_enumerate()),
        ReadonlyArray_forEach(Disposable_addTo(observer)),
      );

      const continuation = () => {
        while ((moveAll(enumerators), allHaveCurrent(enumerators))) {
          pipe(
            enumerators,
            ReadonlyArray_map(Enumerator_getCurrent),
            Observer_notifyObserver(observer),
          );

          Continuation__yield();
        }
        observer[DisposableLike_dispose]();
      };

      pipe(observer, Observer_schedule(continuation));
    };

  const onSubscribe =
    (observables: readonly ObservableLike[]) =>
    (observer: ObserverLike<ReadonlyArray<unknown>>) => {
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
            QueuedEnumerator_create(),
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
