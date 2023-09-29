import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import { DisposableLike } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";

const CreateWithDelegateEnumerator_delegate = Symbol(
  "CreateWithDelegateEnumerator_delegate",
);

interface TProperties<T> {
  [CreateWithDelegateEnumerator_delegate]: EnumeratorLike<T>;
}

const Enumerator_createWithDelegate: <T>(
  enumerator: EnumeratorLike<T>,
) => EnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function CreateWithDelegateEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
          TProperties<T>,
        delegate: EnumeratorLike<T>,
      ): EnumeratorLike<T> {
        init(Disposable_mixin, instance);
        instance[CreateWithDelegateEnumerator_delegate] = delegate;

        // Prevent the delegate from disposing the instance even in the case of
        // errors, so a user can define alternative error handling behavior.
        pipe(instance, Disposable.add(delegate, { ignoreChildErrors: true }));

        return instance;
      },
      props<TProperties<T>>({
        [CreateWithDelegateEnumerator_delegate]: none,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<TProperties<T>>(this);
          return this[CreateWithDelegateEnumerator_delegate][
            EnumeratorLike_current
          ];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties<T>>(this);
          return this[CreateWithDelegateEnumerator_delegate][
            EnumeratorLike_hasCurrent
          ];
        },

        get [EnumeratorLike_isCompleted]() {
          unsafeCast<TProperties<T>>(this);
          return this[CreateWithDelegateEnumerator_delegate][
            EnumeratorLike_isCompleted
          ];
        },

        [EnumeratorLike_move](this: TProperties<T>): boolean {
          return this[CreateWithDelegateEnumerator_delegate][
            EnumeratorLike_move
          ]();
        },
      },
    ),
  ))();

export default Enumerator_createWithDelegate;
