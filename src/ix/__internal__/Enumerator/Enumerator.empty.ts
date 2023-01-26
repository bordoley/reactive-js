import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { pipe } from "../../../functions";
import { EnumeratorLike, SourceLike_move } from "../../../ix";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import { MutableEnumeratorLike } from "../ix.internal";

const Enumerator_empty: <T>() => EnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedMutableEnumeratorMixin),
      function EmptyEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof SourceLike_move>,
      ): EnumeratorLike<T> {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

        return instance;
      },
      {},
      {
        [SourceLike_move](this: MutableEnumeratorLike) {
          pipe(this, Disposable_dispose());
        },
      },
    ),
  );
})();

export default Enumerator_empty;
