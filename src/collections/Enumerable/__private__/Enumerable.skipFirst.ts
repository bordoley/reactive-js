import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Optional, partial, pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import DelegatingEnumeratorMixin, {
  DelegatingEnumeratorMixinLike,
  DelegatingEnumeratorMixinLike_delegate,
} from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_skipFirst: Enumerable.Signature["skipFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const SkipFirstEnumerator_count = Symbol("SkipFirstEnumerator_count");

  interface TProperties {
    [SkipFirstEnumerator_count]: number;
  }

  const createSkipFirstEnumerator = mixInstanceFactory(
    include(DelegatingEnumeratorMixin<T>()),
    function SkipFirstEnumerator(
      instance: EnumeratorLike<T> & TProperties,
      delegate: EnumeratorLike<T>,
      skipCount: Optional<number>,
    ): EnumeratorLike<T> {
      init(DelegatingEnumeratorMixin<T>(), instance, delegate);

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
        unsafeCast<DelegatingEnumeratorMixinLike<T>>(this);
        return this[DelegatingEnumeratorMixinLike_delegate][
          EnumeratorLike_current
        ];
      },

      get [EnumeratorLike_hasCurrent]() {
        unsafeCast<DelegatingEnumeratorMixinLike<T>>(this);
        return this[DelegatingEnumeratorMixinLike_delegate][
          EnumeratorLike_hasCurrent
        ];
      },

      [EnumeratorLike_move](
        this: TProperties &
          Mutable<EnumeratorLike<T>> &
          DelegatingEnumeratorMixinLike<T>,
      ): boolean {
        if (this[EnumeratorLike_isCompleted]) {
          return false;
        }

        const delegate = this[DelegatingEnumeratorMixinLike_delegate];

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
  );

  return (options: { readonly count?: number } = {}) =>
    pipe(createSkipFirstEnumerator, partial(options.count), Enumerable_lift);
})();

export default Enumerable_skipFirst;
