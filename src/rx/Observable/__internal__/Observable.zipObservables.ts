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
import ReadonlyArray_keepType from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.keepType.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.some.js";
import { compose, isSome, isTrue, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix.js";
import Enumerable_enumerate from "../../../ix/Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_toRunnable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnable.js";
import Enumerable_zip from "../../../ix/Enumerable/__internal__/Enumerable.zip.js";
import Enumerator_getCurrent from "../../../ix/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../../ix/Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "../../../ix/Enumerator/__internal__/Enumerator.move.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_count,
  QueueLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";
import EnumerableObservable_toEnumerable from "../../EnumerableObservable/__internal__/EnumerableObservable.toEnumerable.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

export interface QueuedEnumeratorLike<T = unknown>
  extends EnumeratorLike<T>,
    QueueLike<T> {}

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
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
        ): EnumeratorLike<T> & QueueLike<T> {
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
          [SourceLike_move](
            this: DisposableLike & TProperties & PullableQueueLike<T>,
          ) {
            if (!Disposable_isDisposed(this) && this[QueueLike_count] > 0) {
              const next = this[PullableQueueLike_pull]() as T;
              this[EnumeratorLike_current] = next;
              this[EnumeratorLike_hasCurrent] = true;
            } else {
              this[EnumeratorLike_hasCurrent] = false;
            }
          },
        },
      ),
    );
  })();

const Observable_zipObservables = /*@__PURE__*/ (() => {
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

  const ZipObserver_enumerators = Symbol("ZipObserver_enumerators");
  const ZipObserver_queuedEnumerator = Symbol("ZipObserver_sinkEnumerator");

  type TProperties = {
    readonly [ZipObserver_enumerators]: readonly EnumeratorLike<any>[];
    readonly [ZipObserver_queuedEnumerator]: QueuedEnumeratorLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin, delegatingMixin()),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        queuedEnumerator: QueuedEnumeratorLike,
      ): ObserverLike {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(delegatingMixin(), instance, delegate);

        instance[ZipObserver_queuedEnumerator] = queuedEnumerator;
        instance[ZipObserver_enumerators] = enumerators;

        pipe(
          instance,
          Disposable_onComplete(() => {
            if (
              Disposable_isDisposed(queuedEnumerator) ||
              (!Enumerator_hasCurrent(queuedEnumerator) &&
                !Enumerator_move(queuedEnumerator))
            ) {
              pipe(delegate, Disposable_dispose());
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
            EnumerableObservable_toEnumerable(),
            Enumerable_enumerate(),
            Disposable_addTo(observer),
          );

          Enumerator_move(enumerator);
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
            Sink_sourceFrom(next),
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
      ? pipe(
          observables,
          ReadonlyArray_map(EnumerableObservable_toEnumerable()),
          ReadonlyArray_keepType(isSome),
          enumerables =>
            (
              Enumerable_zip as unknown as (
                ...v: any[]
              ) => EnumerableLike<any[]>
            )(...enumerables),
          Enumerable_toRunnable(),
        )
      : isRunnable
      ? Runnable_create(onSink(observables))
      : Observable_create(onSink(observables));
  };
})();

export default Observable_zipObservables;
