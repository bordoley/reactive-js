import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Factory, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";

const Enumerable_create: <T>(
  f: Factory<EnumeratorLike<T>>,
) => EnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  const CreateEnumerable_enumerate = Symbol("CreateEnumerable_enumerate");
  type TProperties = {
    readonly [CreateEnumerable_enumerate]: Factory<EnumeratorLike<T>>;
  };

  return createInstanceFactory(
    mix(
      function CreateEnumerable(
        instance: Pick<
          EnumerableLike<T>,
          typeof InteractiveContainerLike_interact
        > &
          Mutable<TProperties>,
        enumerate: Factory<EnumeratorLike<T>>,
      ): EnumerableLike<T> {
        instance[CreateEnumerable_enumerate] = enumerate;
        return instance;
      },
      props<TProperties>({
        [CreateEnumerable_enumerate]: none,
      }),
      {
        [InteractiveContainerLike_interact](
          this: TProperties,
        ): EnumeratorLike<T> {
          try {
            return this[CreateEnumerable_enumerate]();
          } catch (e) {
            const emptyEnumerator = Enumerator_empty<T>();
            return pipe(emptyEnumerator, Disposable_dispose(error(e)));
          }
        },
      },
    ),
  );
})();

export default Enumerable_create;
