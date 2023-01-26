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
import Enumerable$create from "../../../ix/__internal__/Enumerable/Enumerable.create";
import MutableEnumerator$mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";

const Sequence$toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin<T>();
    type TProperties = {
      seq: SequenceLike<T>;
    };

    const createSequenceEnumerator = createInstanceFactory(
      mix(
        include(Disposable$mixin, typedMutableEnumeratorMixin),
        function SequenceEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            TProperties,
          seq: SequenceLike<T>,
        ): EnumeratorLike<T> {
          init(Disposable$mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.seq = seq;

          return instance;
        },
        props<TProperties>({
          seq: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
            if (!Disposable$isDisposed(this)) {
              const next = this.seq();
              if (isSome(next)) {
                this[EnumeratorLike_current] = next[SequenceLike_data];
                this.seq = next[SequenceLike_next];
              } else {
                pipe(this, Disposable$dispose());
              }
            }
          },
        },
      ),
    );

    return () => (seq: SequenceLike<T>) =>
      Enumerable$create(() => createSequenceEnumerator(seq));
  })();

export default Sequence$toEnumerable;
