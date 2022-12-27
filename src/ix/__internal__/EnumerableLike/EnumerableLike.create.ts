import {
  Mutable,
  createInstanceFactory,
  mixin,
  props,
} from "../../../__internal__/mixins";
import { Factory, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";

import EnumeratorLike__empty from "../EnumeratorLike/EnumeratorLike.empty";

const create: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly enumerate: Factory<EnumeratorLike<T>>;
    };

    return createInstanceFactory(
      mixin(
        function CreateEnumerable(
          instance: Pick<
            EnumerableLike<T>,
            typeof InteractiveContainerLike_interact
          > &
            Mutable<TProperties>,
          enumerate: Factory<EnumeratorLike<T>>,
        ): EnumerableLike<T> {
          instance.enumerate = enumerate;
          return instance;
        },
        props<TProperties>({
          enumerate: none,
        }),
        {
          [InteractiveContainerLike_interact](this: {
            enumerate: Factory<EnumeratorLike<T>>;
          }): EnumeratorLike<T> {
            try {
              return this.enumerate();
            } catch (cause) {
              const emptyEnumerator = EnumeratorLike__empty<T>();
              return pipe(emptyEnumerator, DisposableLike__dispose({ cause }));
            }
          },
        },
      ),
    );
  })();

export default create;
