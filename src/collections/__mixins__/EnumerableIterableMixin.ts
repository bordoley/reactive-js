import { Mixin, mix, props } from "../../__internal__/mixins.js";
import { EnumerableLike, EnumerableLike_enumerate } from "../../collections.js";
import { Function1, pipe, returns } from "../../functions.js";
import Enumerator_fromIterator from "../Enumerator/__private__/Enumerator.fromIterator.js";

const EnumerableIterableMixin: <T>() => Mixin<
  Pick<EnumerableLike<T>, typeof EnumerableLike_enumerate>
> = /*@__PURE__*/ (<T>() => {
  return returns(
    mix<
      Function1<
        Pick<EnumerableLike<T>, typeof EnumerableLike_enumerate>,
        Pick<EnumerableLike<T>, typeof EnumerableLike_enumerate>
      >,
      ReturnType<typeof props>,
      Pick<EnumerableLike<T>, typeof EnumerableLike_enumerate>
    >(
      function EnumerableIterableMixin(
        instance: Pick<EnumerableLike<T>, typeof EnumerableLike_enumerate>,
      ): Omit<EnumerableLike<T>, typeof Symbol.iterator> {
        return instance;
      },
      props({}),
      {
        [EnumerableLike_enumerate](this: EnumerableLike<T>) {
          return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
        },
      },
    ),
  );
})();

export default EnumerableIterableMixin;
