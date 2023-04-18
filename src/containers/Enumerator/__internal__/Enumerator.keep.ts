import {
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../../__internal__/containers.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  Keep,
} from "../../../containers.js";
import { Predicate, none } from "../../../functions.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_keep: Keep<EnumeratorLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const createKeepEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin(), Delegating_mixin()),
      function KeepEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          PredicatedLike<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
      ): EnumeratorLike<T> {
        init(MutableEnumerator_mixin<T>(), instance);
        init(Delegating_mixin(), instance, delegate);

        instance[PredicatedLike_predicate] = predicate;

        return instance;
      },
      props<PredicatedLike<T>>({
        [PredicatedLike_predicate]: none,
      }),
      {
        [EnumeratorLike_move](
          this: PredicatedLike<T> &
            MutableEnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          this[MutableEnumeratorLike_reset]();

          const delegate = this[DelegatingLike_delegate];
          const predicate = this[PredicatedLike_predicate];

          while (
            (delegate[EnumeratorLike_move](),
            delegate[EnumeratorLike_hasCurrent]) &&
            !predicate(this[EnumeratorLike_current])
          ) {}

          return delegate[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (predicate: Predicate<T>) => (delegate: EnumeratorLike<T>) =>
    createKeepEnumerator(delegate, predicate);
})();

export default Enumerator_keep;
