import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";

import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  HigherOrderEnumeratorLike,
  HigherOrderEnumerator_inner,
} from "../../__internal__/types.js";
import {
  Function1,
  Function2,
  Optional,
  alwaysFalse,
  error,
  isSome,
  none,
  pipe,
  unsafeCast,
} from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumeratorFactoryLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const EnumeratorFactory_repeatOrRetry: <T>(
  predicate: Function2<number, Optional<Error>, boolean>,
) => Function1<EnumeratorFactoryLike<T>, EnumeratorFactoryLike<T>> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = HigherOrderEnumeratorLike<T> & {
      p: (count: number, error?: Error) => boolean;
      cnt: number;
    };

    const createRepeatOrRetryEnumerator = createInstanceFactory(
      mix(
        include(Delegating_mixin(), Disposable_mixin),
        function RepeatOrRetryEnumerator(
          instance: Omit<EnumeratorLike<T>, keyof DisposableLike> & TProperties,
          delegate: EnumeratorFactoryLike<T>,
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
          cnt: 0,
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
              DelegatingLike<EnumeratorFactoryLike<T>>,
          ): boolean {
            let inner = this[HigherOrderEnumerator_inner];

            while (
              !this[DisposableLike_isDisposed] &&
              !inner[EnumeratorLike_move]()
            ) {
              const { cnt } = this;

              let shouldComplete = false;
              let err = inner[DisposableLike_error];
              try {
                shouldComplete = cnt !== 0 && !this.p(cnt, err);
              } catch (e) {
                shouldComplete = true;
                err = isSome(err) ? error([e, err]) : error(e);
              }

              if (shouldComplete) {
                this[DisposableLike_dispose](err);
              } else {
                this.cnt++;
                inner = this[DelegatingLike_delegate]();
                pipe(this, Disposable_add(inner, { ignoreChildErrors: true }));
                this[HigherOrderEnumerator_inner] = inner;
              }
            }

            return this[EnumeratorLike_hasCurrent];
          },
        },
      ),
    );

    return (predicate: Function2<number, Optional<Error>, boolean>) =>
      (delegate: EnumeratorFactoryLike<T>) =>
      () =>
        createRepeatOrRetryEnumerator(delegate, predicate);
  })();

export default EnumeratorFactory_repeatOrRetry;
