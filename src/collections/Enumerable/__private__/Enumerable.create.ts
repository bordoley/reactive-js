import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
} from "../../../collections.js";
import { Factory, none } from "../../../functions.js";
import EnumerableIterableMixin from "../../__mixins__/EnumerableIterableMixin.js";

const Enumerable_create: <T>(
  enumerate: Factory<EnumeratorLike<T>>,
) => EnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EnumerableLike_enumerate]: Factory<EnumeratorLike<T>>;
  };

  return mixInstanceFactory(
    include(EnumerableIterableMixin()),
    function CreateEnumerable(
      instance: TProperties,
      enumerate: Factory<EnumeratorLike<T>>,
    ): EnumerableLike<T> {
      init(EnumerableIterableMixin<T>(), instance);
      instance[EnumerableLike_enumerate] = enumerate;

      return instance;
    },
    props<TProperties>({
      [EnumerableLike_enumerate]: none,
    }),
  );
})();

export default Enumerable_create;
