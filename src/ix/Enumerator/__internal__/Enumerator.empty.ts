import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { pipe } from "../../../functions";
import { EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import MutableEnumerator_mixin from "../../__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal";

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
