import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers.js";
import { isSome, none, pipe } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
  ToEnumerable,
} from "../../../ix.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import MutableEnumerator_mixin from "../../../ix/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

const Sequence_toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();

    const SequenceEnumerator_seq = Symbol("SequenceEnumerator_seq");

    type TProperties = {
      [SequenceEnumerator_seq]: SequenceLike<T>;
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

          instance[SequenceEnumerator_seq] = seq;

          return instance;
        },
        props<TProperties>({
          [SequenceEnumerator_seq]: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
            if (!Disposable_isDisposed(this)) {
              const next = this[SequenceEnumerator_seq]();
              if (isSome(next)) {
                this[EnumeratorLike_current] = next[SequenceLike_data];
                this[SequenceEnumerator_seq] = next[SequenceLike_next];
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
