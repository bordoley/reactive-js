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
import Enumerable_create from "../../../ix/__internal__/Enumerable/Enumerable.create";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";

const Sequence_toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
    type TProperties = {
      seq: SequenceLike<T>;
    };

    const createSequenceEnumerator = createInstanceFactory(
      mix(
        include(Disposable_mixin, typedMutableEnumeratorMixin),
        function SequenceEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            TProperties,
          seq: SequenceLike<T>,
        ): EnumeratorLike<T> {
          init(Disposable_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.seq = seq;

          return instance;
        },
        props<TProperties>({
          seq: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
            if (!Disposable_isDisposed(this)) {
              const next = this.seq();
              if (isSome(next)) {
                this[EnumeratorLike_current] = next[SequenceLike_data];
                this.seq = next[SequenceLike_next];
              } else {
                pipe(this, Disposable_dispose());
              }
            }
          },
        },
      ),
    );

    return () => (seq: SequenceLike<T>) =>
      Enumerable_create(() => createSequenceEnumerator(seq));
  })();

export default Sequence_toEnumerable;
