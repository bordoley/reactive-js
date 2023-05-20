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
  HigherOrderEnumeratorLike,
  HigherOrderEnumerator_inner,
} from "../../__internal__/types.js";
import { Function1, none, pipe, returns, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import Enumerator_empty from "./Enumerator.empty.js";

const Enumerator_concatAll: <T>() => Function1<
  EnumeratorLike<EnumeratorLike<T>>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns(
    createInstanceFactory(
      mix(
        include(Delegating_mixin(), Disposable_mixin),
        function ConcatAllEnumerator(
          instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
            HigherOrderEnumeratorLike<T>,
          delegate: EnumeratorLike<EnumeratorLike<T>>,
        ): EnumeratorLike<T> {
          init(Delegating_mixin(), instance, delegate);
          init(Disposable_mixin, instance);

          pipe(instance, Disposable_add(delegate));

          instance[HigherOrderEnumerator_inner] = Enumerator_empty();

          return instance;
        },
        props<HigherOrderEnumeratorLike<T>>({
          [HigherOrderEnumerator_inner]: none,
        }),
        {
          get [EnumeratorLike_current]() {
            unsafeCast<HigherOrderEnumeratorLike<T>>(this);
            return this[HigherOrderEnumerator_inner][EnumeratorLike_current];
          },

          get [EnumeratorLike_hasCurrent]() {
            unsafeCast<HigherOrderEnumeratorLike<T>>(this);
            return this[HigherOrderEnumerator_inner][EnumeratorLike_hasCurrent];
          },

          [EnumeratorLike_move](
            this: HigherOrderEnumeratorLike<T> &
              EnumeratorLike<T> &
              DelegatingLike<EnumeratorLike<EnumeratorLike<T>>>,
          ): boolean {
            const delegate = this[DelegatingLike_delegate];
            let inner = this[HigherOrderEnumerator_inner];

            while (!inner[EnumeratorLike_move]()) {
              if (delegate[EnumeratorLike_move]()) {
                inner = delegate[EnumeratorLike_current];
                pipe(this, Disposable_add(inner));
                this[HigherOrderEnumerator_inner] = inner;
              } else {
                this[DisposableLike_dispose]();
                inner = Enumerator_empty();
                this[HigherOrderEnumerator_inner] = inner;
                break;
              }
            }

            return this[EnumeratorLike_hasCurrent];
          },
        },
      ),
    ),
  ))();

export default Enumerator_concatAll;
