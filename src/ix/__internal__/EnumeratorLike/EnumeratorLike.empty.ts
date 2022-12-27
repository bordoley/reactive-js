import {
  MutableEnumeratorLike,
  mutableEnumeratorMixin,
} from "../../../__internal__/ix/EnumeratorLike.mutable";
import {
  createInstanceFactory,
  include,
  init,
  mixin,
} from "../../../__internal__/mixins";
import { pipe } from "../../../functions";
import { EnumeratorLike, SourceLike_move } from "../../../ix";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";

const empty: <T>() => EnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = mutableEnumeratorMixin<T>();
  return createInstanceFactory(
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
})();

export default empty;
