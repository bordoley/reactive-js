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
import {
  Equality,
  Optional,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import DelegatingEnumeratorMixin, {
  DelegatingEnumeratorMixinLike,
  DelegatingEnumeratorMixinLike_delegate,
} from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_distinctUntilChanged: Enumerable.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const DistinctUntilChangedEnumerator_equality = Symbol(
      "DistinctUntilChangedEnumerator_equality",
    );
    const DistinctUntilChangedEnumerator_prev = Symbol(
      "DistinctUntilChangedEnumerator_prev",
    );
    const DistinctUntilChangedEnumerator_hasValue = Symbol(
      "DistinctUntilChangedEnumerator_hasValue",
    );

    interface TProperties<T> {
      [DistinctUntilChangedEnumerator_equality]: Equality<T>;
      [DistinctUntilChangedEnumerator_hasValue]: boolean;
      [DistinctUntilChangedEnumerator_prev]: T;
      [EnumeratorLike_isCompleted]: boolean;
    }

    const createDistinctUntilChangedEnumerator = createInstanceFactory(
      mix(
        include(DelegatingEnumeratorMixin<T>()),
        function DistinctUntilChangedEnumerator(
          instance: TProperties<T> & EnumeratorLike<T>,
          delegate: EnumeratorLike<T>,
          equality: Optional<Equality<T>>,
        ): EnumeratorLike<T> {
          init(DelegatingEnumeratorMixin<T>(), instance, delegate);

          instance[DistinctUntilChangedEnumerator_equality] =
            equality ?? strictEquality;

          return instance;
        },
        props<
          TProperties<T> &
            Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
        >({
          [DistinctUntilChangedEnumerator_equality]: none,
          [DistinctUntilChangedEnumerator_hasValue]: false,
          [DistinctUntilChangedEnumerator_prev]: none,
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
            this: Mutable<EnumeratorLike<T>> &
              DelegatingEnumeratorMixinLike<T> &
              TProperties<T>,
          ): boolean {
            if (this[EnumeratorLike_isCompleted]) {
              return false;
            }

            const delegate = this[DelegatingEnumeratorMixinLike_delegate];
            const equality = this[DistinctUntilChangedEnumerator_equality];

            while (delegate[EnumeratorLike_move]()) {
              const next = delegate[EnumeratorLike_current];

              if (
                !this[DistinctUntilChangedEnumerator_hasValue] ||
                !equality(this[DistinctUntilChangedEnumerator_prev], next)
              ) {
                this[DistinctUntilChangedEnumerator_prev] = next;
                this[DistinctUntilChangedEnumerator_hasValue] = true;
                break;
              }
            }

            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

            return this[EnumeratorLike_hasCurrent];
          },
        },
      ),
    );

    return (options?: { equality?: Equality<T> }) =>
      pipe(
        createDistinctUntilChangedEnumerator,
        partial(options?.equality),
        Enumerable_lift,
      );
  })();

export default Enumerable_distinctUntilChanged;
