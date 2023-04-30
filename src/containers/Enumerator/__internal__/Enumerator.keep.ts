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
  EnumeratorContainerLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  Keep,
} from "../../../containers.js";
import { Predicate, none, unsafeCast } from "../../../functions.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";

const Enumerator_keep: Keep<EnumeratorContainerLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  const createKeepEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function KeepEnumerator(
        instance: EnumeratorLike<T> & PredicatedLike<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);

        instance[PredicatedLike_predicate] = predicate;

        return instance;
      },
      props<PredicatedLike<T>>({
        [PredicatedLike_predicate]: none,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_current];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
        },

        [EnumeratorLike_move](
          this: PredicatedLike<T> &
            EnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
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
