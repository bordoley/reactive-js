import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import type * as Enumerator from "../../Enumerator.js";
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
  DistinctUntilChangedLike,
  DistinctUntilChangedLike_equality,
  DistinctUntilChangedLike_hasValue,
  DistinctUntilChangedLike_prev,
} from "../../__internal__/types.js";
import { Equality, none, strictEquality, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_distinctUntilChanged: Enumerator.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedEnumerator = createInstanceFactory(
      mix(
        include(Delegating_mixin(), Disposable_delegatingMixin),
        function DistinctUntilChangedEnumerator(
          instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
            DistinctUntilChangedLike<T>,
          delegate: EnumeratorLike<T>,
          equality: Equality<T>,
        ): EnumeratorLike<T> {
          init(Delegating_mixin(), instance, delegate);
          init(Disposable_delegatingMixin, instance, delegate);

          instance[DistinctUntilChangedLike_equality] = equality;

          return instance;
        },
        props<DistinctUntilChangedLike<T>>({
          [DistinctUntilChangedLike_equality]: none,
          [DistinctUntilChangedLike_prev]: none,
          [DistinctUntilChangedLike_hasValue]: false,
        }),
        {
          get [EnumeratorLike_current]() {
            unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
            return this[DelegatingLike_delegate][EnumeratorLike_current];
          },

          get [EnumeratorLike_hasCurrent]() {
            unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
            return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
          },

          [EnumeratorLike_move](
            this: DistinctUntilChangedLike<T> &
              EnumeratorLike<T> &
              DelegatingLike<EnumeratorLike<T>>,
          ): boolean {
            const delegate = this[DelegatingLike_delegate];
            const equality = this[DistinctUntilChangedLike_equality];

            while (delegate[EnumeratorLike_move]()) {
              const next = delegate[EnumeratorLike_current];

              if (
                !this[DistinctUntilChangedLike_hasValue] ||
                !equality(this[DistinctUntilChangedLike_prev], next)
              ) {
                this[DistinctUntilChangedLike_prev] = next;
                this[DistinctUntilChangedLike_hasValue] = true;
                break;
              }
            }

            return delegate[EnumeratorLike_hasCurrent];
          },
        },
      ),
    );

    return (options: { equality?: Equality<T> } = {}) => {
      const { equality = strictEquality } = options ?? {};
      return (delegate: EnumeratorLike<T>) =>
        createDistinctUntilChangedEnumerator(delegate, equality);
    };
  })();

export default Enumerator_distinctUntilChanged;
