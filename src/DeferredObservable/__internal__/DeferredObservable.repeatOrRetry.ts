import type * as DeferredObservable from "../../DeferredObservable.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "../../Observable/__internal__/Observable.liftRunnableUpperBounded.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  CountingLike,
  CountingLike_count,
  DelegatingLike,
  DelegatingLike_delegate,
  HigherOrderEnumeratorLike,
  HigherOrderEnumerator_inner,
} from "../../__internal__/types.js";
import {
  Function2,
  Optional,
  alwaysFalse,
  bindMethod,
  error,
  isSome,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../functions.js";
import {
  DeferredObservableLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  ObservableLike,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";

type DeferredObservableRepeatOrRetry = <T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => DeferredObservable.DeferredObservableOperator<T, T>;

const DeferredObservable_repeatOrRetry: DeferredObservableRepeatOrRetry =
  /*@__PURE__*/ (<T>() => {
    const createRepeatObserver = (
      delegate: ObserverLike<T>,
      observable: ObservableLike<T>,
      shouldRepeat: (count: number, error?: Error) => boolean,
    ) => {
      let count = 1;

      const doOnDispose = (err?: Error) => {
        let shouldComplete = false;
        try {
          shouldComplete = !shouldRepeat(count, err);
        } catch (e) {
          shouldComplete = true;
          err = isSome(err) ? error([error(e), err]) : error(e);
        }

        if (shouldComplete) {
          delegate[DisposableLike_dispose](err);
        } else {
          count++;

          pipe(
            observable,
            Observable_forEach(bindMethod(delegate, SinkLike_notify)),
            Observable_subscribeWithConfig(delegate, delegate),
            Disposable_addTo(delegate, { ignoreChildErrors: true }),
            Disposable_onDisposed(doOnDispose),
          );
        }
      };

      return pipe(
        Observer_createWithDelegate(delegate),
        Disposable_addTo(delegate, { ignoreChildErrors: true }),
        Disposable_onDisposed(doOnDispose),
      );
    };

    type TProperties = HigherOrderEnumeratorLike<T> &
      CountingLike & {
        p: (count: number, error?: Error) => boolean;
        [CountingLike_count]: number;
      };

    const createRepeatOrRetryEnumerator = createInstanceFactory(
      mix(
        include(Delegating_mixin(), Disposable_mixin),
        function RepeatOrRetryEnumerator(
          instance: Omit<EnumeratorLike<T>, keyof DisposableLike> & TProperties,
          delegate: EnumerableLike<T>,
          shouldRepeat: Function2<number, Optional<Error>, boolean>,
        ): EnumeratorLike<T> {
          init(Delegating_mixin(), instance, delegate);
          init(Disposable_mixin, instance);

          instance[HigherOrderEnumerator_inner] = Enumerator_empty();
          instance.p = shouldRepeat;

          return instance;
        },
        props<TProperties>({
          [HigherOrderEnumerator_inner]: none,
          p: alwaysFalse,
          [CountingLike_count]: 0,
        }),
        {
          get [EnumeratorLike_current]() {
            unsafeCast<TProperties>(this);
            return this[HigherOrderEnumerator_inner][EnumeratorLike_current];
          },

          get [EnumeratorLike_hasCurrent]() {
            unsafeCast<TProperties>(this);
            return this[HigherOrderEnumerator_inner][EnumeratorLike_hasCurrent];
          },

          [EnumeratorLike_move](
            this: TProperties &
              EnumeratorLike<T> &
              DelegatingLike<EnumerableLike<T>>,
          ): boolean {
            let inner = this[HigherOrderEnumerator_inner];

            while (
              !this[DisposableLike_isDisposed] &&
              !inner[EnumeratorLike_move]()
            ) {
              const cnt = this[CountingLike_count];

              let shouldComplete = false;
              let err = inner[DisposableLike_error];
              try {
                shouldComplete = cnt !== 0 && !this.p(cnt, err);
              } catch (e) {
                shouldComplete = true;
                err = isSome(err) ? error([error(e), err]) : error(e);
              }

              if (shouldComplete) {
                this[DisposableLike_dispose](err);
              } else {
                this[CountingLike_count]++;
                inner =
                  this[DelegatingLike_delegate][EnumerableLike_enumerate]();
                pipe(this, Disposable_add(inner, { ignoreChildErrors: true }));
                this[HigherOrderEnumerator_inner] = inner;
              }
            }

            return this[EnumeratorLike_hasCurrent];
          },
        },
      ),
    );

    return ((shouldRepeat: (count: number, error?: Error) => boolean) =>
      (observable: DeferredObservableLike<T>) => {
        if (Observable_isEnumerable(observable)) {
          return Enumerable_create(() =>
            createRepeatOrRetryEnumerator(observable, shouldRepeat),
          );
        } else {
          const operator = pipe(
            createRepeatObserver,
            partial(observable, shouldRepeat),
          );
          return pipe(
            observable,
            Observable_liftRunnableUpperBounded(operator),
          );
        }
      }) as DeferredObservableRepeatOrRetry;
  })();

export default DeferredObservable_repeatOrRetry;
