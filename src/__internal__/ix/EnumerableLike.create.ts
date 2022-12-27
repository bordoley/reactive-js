import { Empty } from "../../containers";
import { Factory, none, pipe } from "../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
  SourceLike_move,
} from "../../ix";
import DisposableLike__dispose from "../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../util/__internal__/DisposableLike/DisposableLike.mixin";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../mixins";
import {
  MutableEnumeratorLike,
  mutableEnumeratorMixin,
} from "./EnumeratorLike.mutable";

export const create: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T> =
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
              const emptyEnumerable = empty<T>();
              return pipe(
                emptyEnumerable[InteractiveContainerLike_interact](),
                DisposableLike__dispose({ cause }),
              );
            }
          },
        },
      ),
    );
  })();

export const empty: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = mutableEnumeratorMixin<T>();
  const createEnumerator = createInstanceFactory(
    mixin(
      include(DisposableLike__mixin, typedMutableEnumeratorMixin),
      function EmptyEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof SourceLike_move>,
      ): EnumeratorLike<T> {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

        return instance;
      },
      {},
      {
        [SourceLike_move](this: MutableEnumeratorLike) {
          pipe(this, DisposableLike__dispose());
        },
      },
    ),
  );

  return () => create(createEnumerator);
})();
