import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import { Function1, none, pipe, returns } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
import Enumerator_empty from "./Enumerator.empty.js";

const ConcatAllEnumerator_inner = Symbol("ConcatAllEnumerator_inner");
const ConcatAllEnumerator_delegate = Symbol("ConcatAllEnumerator_delegate");

interface TProperties<T> {
  [ConcatAllEnumerator_inner]: EnumeratorLike<T>;
  [ConcatAllEnumerator_delegate]: EnumeratorLike<EnumeratorLike<T>>;
}

const Enumerator_concatAll: <T>() => Function1<
  EnumeratorLike<EnumeratorLike<T>>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns(
    createInstanceFactory(
      mix(
        include(Disposable_mixin),
        function ConcatAllEnumerator(
          instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
            TProperties<T>,
          delegate: EnumeratorLike<EnumeratorLike<T>>,
        ): EnumeratorLike<T> {
          init(Disposable_mixin, instance);

          pipe(instance, Disposable.add(delegate));

          instance[ConcatAllEnumerator_delegate] = delegate;
          instance[ConcatAllEnumerator_inner] = Enumerator_empty();

          return instance;
        },
        props<
          TProperties<T> &
            Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
        >({
          [ConcatAllEnumerator_inner]: none,
          [ConcatAllEnumerator_delegate]: none,
          [EnumeratorLike_isCompleted]: false,
        }),
        {
          get [EnumeratorLike_current]() {
            unsafeCast<TProperties<T>>(this);
            return this[ConcatAllEnumerator_inner][EnumeratorLike_current];
          },

          get [EnumeratorLike_hasCurrent]() {
            unsafeCast<TProperties<T>>(this);
            return this[ConcatAllEnumerator_inner][EnumeratorLike_hasCurrent];
          },

          [EnumeratorLike_move](
            this: TProperties<T> & Mutable<EnumeratorLike<T>>,
          ): boolean {
            if (this[EnumeratorLike_isCompleted]) {
              return false;
            }

            const delegate = this[ConcatAllEnumerator_delegate];
            let inner = this[ConcatAllEnumerator_inner];

            while (!inner[EnumeratorLike_move]()) {
              if (delegate[EnumeratorLike_move]()) {
                inner = delegate[EnumeratorLike_current];
                pipe(this, Disposable.add(inner));
                this[ConcatAllEnumerator_inner] = inner;
              } else {
                this[DisposableLike_dispose]();
                inner = Enumerator_empty();
                this[ConcatAllEnumerator_inner] = inner;
                break;
              }
            }

            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

            return this[EnumeratorLike_hasCurrent];
          },
        },
      ),
    ),
  ))();

export default Enumerator_concatAll;
