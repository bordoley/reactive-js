import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { isSome, none, pipe } from "../../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
  ToEnumerable,
} from "../../../ix";
import EnumerableLike__create from "../../../ix/__internal__/EnumerableLike/EnumerableLike.create";
import MutableEnumeratorLike__mixin from "../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";

const SequenceLike__toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();
    type TProperties = {
      seq: SequenceLike<T>;
    };

    const createSequenceEnumerator = createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedMutableEnumeratorMixin),
        function SequenceEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            TProperties,
          seq: SequenceLike<T>,
        ): EnumeratorLike<T> {
          init(DisposableLike__mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.seq = seq;

          return instance;
        },
        props<TProperties>({
          seq: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
            if (!DisposableLike__isDisposed(this)) {
              const next = this.seq();
              if (isSome(next)) {
                this[EnumeratorLike_current] = next[SequenceLike_data];
                this.seq = next[SequenceLike_next];
              } else {
                pipe(this, DisposableLike__dispose());
              }
            }
          },
        },
      ),
    );

    return () => (seq: SequenceLike<T>) =>
      EnumerableLike__create(() => createSequenceEnumerator(seq));
  })();

export default SequenceLike__toEnumerable;
