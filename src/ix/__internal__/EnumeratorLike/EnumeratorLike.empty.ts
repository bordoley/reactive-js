import {
  createInstanceFactory,
  include,
  init,
  mixin,
} from "../../../__internal__/mixins";
import { pipe } from "../../../functions";
import { EnumeratorLike, SourceLike_move } from "../../../ix";
import MutableEnumeratorLike__mixin from "../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { MutableEnumeratorLike } from "../ix.internal";

const empty: <T>() => EnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();
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
