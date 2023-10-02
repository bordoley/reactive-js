import {
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Factory, none } from "../../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
} from "../../../ix.js";

const Enumerable_create: <T>(
  enumerate: Factory<EnumeratorLike<T>>,
) => EnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EnumerableLike_enumerate]: Factory<EnumeratorLike<T>>;
  };

  return createInstanceFactory(
    mix(
      function CreateObservable(
        instance: EnumerableLike<T> & TProperties,
        enumerate: Factory<EnumeratorLike<T>>,
      ): EnumerableLike<T> {
        instance[EnumerableLike_enumerate] = enumerate;

        return instance;
      },
      props<TProperties>({
        [EnumerableLike_enumerate]: none,
      }),
      {},
    ),
  );
})();

export default Enumerable_create;
