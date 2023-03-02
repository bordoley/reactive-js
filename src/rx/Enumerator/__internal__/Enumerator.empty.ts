import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import { EnumeratorLike, EnumeratorLike_move } from "../../../rx.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import { MutableEnumeratorLike } from "../../__internal__/rx.internal.js";
import MutableEnumerator_mixin from "./MutableEnumerator.mixin.js";

const Enumerator_empty: <T>() => EnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedMutableEnumeratorMixin),
      function EmptyEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move>,
      ): EnumeratorLike<T> {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

        return instance;
      },
      {},
      {
        [EnumeratorLike_move](this: MutableEnumeratorLike) {
          pipe(this, Disposable_dispose());
        },
      },
    ),
  );
})();

export default Enumerator_empty;
