import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { pipe } from "../../../functions";
import { EnumeratorLike, SourceLike_move } from "../../../ix";
import MutableEnumerator$mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import { MutableEnumeratorLike } from "../ix.internal";

const Enumerator$empty: <T>() => EnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator$mixin<T>();
  return createInstanceFactory(
    mix(
      include(Disposable$mixin, typedMutableEnumeratorMixin),
      function EmptyEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof SourceLike_move>,
      ): EnumeratorLike<T> {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

        return instance;
      },
      {},
      {
        [SourceLike_move](this: MutableEnumeratorLike) {
          pipe(this, Disposable$dispose());
        },
      },
    ),
  );
})();

export default Enumerator$empty;
