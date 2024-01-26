import { Symbol } from "../../__internal__/constants.js";
import { Mixin, mix, props } from "../../__internal__/mixins.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../collections.js";
import { returns } from "../../functions.js";

const EnumerableIterableMixin: <T>() => Mixin<
  EnumerableLike<T>,
  Omit<EnumerableLike<T>, typeof Symbol.iterator>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix<
      EnumerableLike<T>,
      unknown,
      Pick<EnumerableLike<T>, typeof Symbol.iterator>,
      Omit<EnumerableLike<T>, typeof Symbol.iterator>
    >(
      function EnumerableIterableMixin(
        instance: EnumerableLike<T>,
      ): EnumerableLike<T> {
        return instance;
      },
      props(),
      {
        *[Symbol.iterator](this: EnumerableLike<T>) {
          const enumerator = this[EnumerableLike_enumerate]();
          while (enumerator[EnumeratorLike_move]()) {
            yield enumerator[EnumeratorLike_current];
          }
        },
      },
    ),
  ))();

export default EnumerableIterableMixin;
