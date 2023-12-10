import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
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
import { Predicate, none, partial, pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import DelegatingEnumeratorMixin, {
  DelegatingEnumeratorMixinLike,
  DelegatingEnumeratorMixinLike_delegate,
} from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_keep: Enumerable.Signature["keep"] = /*@__PURE__*/ (<T>() => {
  const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");

  interface TProperties<T> {
    [KeepEnumerator_predicate]: Predicate<T>;
    [EnumeratorLike_isCompleted]: boolean;
  }

  const createKeepEnumerator = createInstanceFactory(
    mix(
      include(DelegatingEnumeratorMixin<T>()),
      function KeepEnumerator(
        instance: TProperties<T> & EnumeratorLike<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
      ): EnumeratorLike<T> {
        init(DelegatingEnumeratorMixin<T>(), instance, delegate);

        instance[KeepEnumerator_predicate] = predicate;

        return instance;
      },
      props<
        TProperties<T> &
          Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
      >({
        [KeepEnumerator_predicate]: none,
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

        get [EnumeratorLike_isCompleted]() {
          unsafeCast<DelegatingEnumeratorMixinLike<T>>(this);
          return this[DelegatingEnumeratorMixinLike_delegate][
            EnumeratorLike_isCompleted
          ];
        },

        [EnumeratorLike_move](
          this: TProperties<T> &
            Mutable<EnumeratorLike<T>> &
            DelegatingEnumeratorMixinLike<T>,
        ): boolean {
          if (this[EnumeratorLike_isCompleted]) {
            return false;
          }

          const delegate = this[DelegatingEnumeratorMixinLike_delegate];
          const predicate = this[KeepEnumerator_predicate];

          while (
            delegate[EnumeratorLike_move]() &&
            !predicate(this[EnumeratorLike_current])
          ) {}

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (predicate: Predicate<T>) =>
    pipe(createKeepEnumerator, partial(predicate), Enumerable_lift);
})();

export default Enumerable_keep;
