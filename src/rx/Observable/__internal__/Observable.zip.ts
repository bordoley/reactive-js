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
import { Zip } from "../../../containers.js";
import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_keep from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.some.js";
import {
  compose,
  getLength,
  isSome,
  isTrue,
  none,
  pipe,
} from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix.js";
import Enumerable_enumerate from "../../../ix/Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_toRunnableObservable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import Enumerable_zip from "../../../ix/Enumerable/__internal__/Enumerable.zip.js";
import Enumerator_getCurrent from "../../../ix/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../../ix/Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "../../../ix/Enumerator/__internal__/Enumerator.move.js";
import {
  ObservableLike,
  ObserverLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx.js";
import { DisposableLike, DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import EnumerableObservable_toEnumerable from "../../EnumerableObservable/__internal__/EnumerableObservable.toEnumerable.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import RunnableObservable_create from "../../RunnableObservable/__internal__/RunnableObservable.create.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

export interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {}

const EnumeratorSink_buffer = Symbol("EnumeratorSink_buffer");

const EnumeratorSink_create: <T>() => EnumeratorSinkLike<T> = (<T>() => {
  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    readonly [EnumeratorSink_buffer]: T[];
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function EnumeratorSink(
        instance: Pick<
          SinkLike<T> & EnumeratorLike<T>,
          typeof SinkLike_notify | typeof SourceLike_move
        > &
          Mutable<TProperties>,
      ): EnumeratorLike<T> & SinkLike<T> {
        init(Disposable_mixin, instance);

        instance[EnumeratorSink_buffer] = [];

        pipe(
          instance,
          Disposable_onDisposed(() => {
            instance[EnumeratorSink_buffer].length = 0;
            instance[EnumeratorLike_hasCurrent] = false;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [EnumeratorSink_buffer]: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
      }),
      {
        [SinkLike_notify](this: DisposableLike & TProperties, next: T) {
          if (Disposable_isDisposed(this)) {
            return;
          }
          this[EnumeratorSink_buffer].push(next);
        },
        [SourceLike_move](this: DisposableLike & TProperties) {
          const { [EnumeratorSink_buffer]: buffer } = this;

          if (!Disposable_isDisposed(this) && getLength(buffer) > 0) {
            const next = buffer.shift() as T;
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

  const ZipObserver_enumerators = Symbol("ZipObserver_enumerators");
  const ZipObserver_sinkEnumerator = Symbol("ZipObserver_sinkEnumerator");

  type TProperties = {
    readonly [ZipObserver_enumerators]: readonly EnumeratorLike<any>[];
    readonly [ZipObserver_sinkEnumerator]: EnumeratorLike & SinkLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin, delegatingMixin()),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(delegatingMixin(), instance, delegate);

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
        [ZipObserver_enumerators]: none,
        [ZipObserver_sinkEnumerator]: none,
      }),
      {
        [SinkLike_notify](
          this: ObserverLike &
            TProperties &
            DelegatingLike<ObserverLike<readonly unknown[]>>,
          next: unknown,
        ) {
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

          this[DelegatingLike_delegate][SinkLike_notify](zippedNext);

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
          ReadonlyArray_map(EnumerableObservable_toEnumerable()),
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
