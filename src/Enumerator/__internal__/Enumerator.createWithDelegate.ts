import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
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
} from "../../__internal__/types.js";
import { pipe, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_createWithDelegate: <T>(
  enumerator: EnumeratorLike<T>,
) => EnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Delegating_mixin(), Disposable_mixin),
      function CreateWithDelegateEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike>,
        delegate: EnumeratorLike<T>,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);

        // Prevent the delegate from disposing the instance even in the case of
        // errors, so a user can define alternative error handling behavior.
        pipe(instance, Disposable_add(delegate, { ignoreChildErrors: true }));

        return instance;
      },
      props({}),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_current];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
        },

        get [EnumeratorLike_isCompleted]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_isCompleted];
        },

        [EnumeratorLike_move](
          this: DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          return this[DelegatingLike_delegate][EnumeratorLike_move]();
        },
      },
    ),
  ))();

export default Enumerator_createWithDelegate;
