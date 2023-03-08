import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers.js";
import { Function1, isSome, none, returns } from "../../../functions.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";

const Sequence_enumerate: <T>() => Function1<
  SequenceLike<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  const SequenceEnumerator_sequence = Symbol("SequenceEnumerator_sequence");

  type TSequenceEnumeratorProperties = {
    [SequenceEnumerator_sequence]: SequenceLike<T>;
  };

  const createEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin<T>()),
      function SequenceEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          Mutable<TSequenceEnumeratorProperties>,
        seq: SequenceLike<T>,
      ): EnumeratorLike<T> {
        init(MutableEnumerator_mixin<T>(), instance);
        instance[SequenceEnumerator_sequence] = seq;

        return instance;
      },
      props<TSequenceEnumeratorProperties>({
        [SequenceEnumerator_sequence]: none,
      }),
      {
        [EnumeratorLike_move](
          this: TSequenceEnumeratorProperties & MutableEnumeratorLike<T>,
        ) {
          this[MutableEnumeratorLike_reset]();

          const result = this[SequenceEnumerator_sequence]();

          if (isSome(result)) {
            const data = result[SequenceLike_data];
            this[EnumeratorLike_current] = data;

            const next = result[SequenceLike_next];
            this[SequenceEnumerator_sequence] = next;
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return returns(createEnumerator);
})();

export default Sequence_enumerate;
