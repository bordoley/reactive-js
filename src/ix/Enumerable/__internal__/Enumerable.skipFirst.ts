import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import { Optional, partial, pipe } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_skipFirst: Enumerable.Signature["skipFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const SkipFirstEnumerator_count = Symbol("SkipFirstEnumerator_count");

  interface TProperties {
    [SkipFirstEnumerator_count]: number;
  }

  const createSkipFirstEnumerator = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin<EnumeratorLike<T>>()),
      function SkipFirstEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> & TProperties,
        delegate: EnumeratorLike<T>,
        skipCount: Optional<number>,
      ): EnumeratorLike<T> {
        init(
          Disposable_delegatingMixin<EnumeratorLike<T>>(),
          instance,
          delegate,
        );

        instance[SkipFirstEnumerator_count] = clampPositiveInteger(
          skipCount ?? 1,
        );

        return instance;
      },
      props<
        TProperties & Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
      >({
        [SkipFirstEnumerator_count]: 0,
        [EnumeratorLike_isCompleted]: false,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<DelegatingDisposableLike<EnumeratorLike<T>>>(this);
          return this[DelegatingDisposableLike_delegate][
            EnumeratorLike_current
          ];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<DelegatingDisposableLike<EnumeratorLike<T>>>(this);
          return this[DelegatingDisposableLike_delegate][
            EnumeratorLike_hasCurrent
          ];
        },

        [EnumeratorLike_move](
          this: TProperties &
            Mutable<EnumeratorLike<T>> &
            DelegatingDisposableLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[EnumeratorLike_isCompleted]) {
            return false;
          }

          const delegate = this[DelegatingDisposableLike_delegate];

          this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];

          while (delegate[EnumeratorLike_move]()) {
            this[SkipFirstEnumerator_count] = max(
              this[SkipFirstEnumerator_count] - 1,
              -1,
            );

            if (this[SkipFirstEnumerator_count] < 0) {
              break;
            }
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (options: { readonly count?: number } = {}) =>
    pipe(createSkipFirstEnumerator, partial(options.count), Enumerable_lift);
})();

export default Enumerable_skipFirst;
