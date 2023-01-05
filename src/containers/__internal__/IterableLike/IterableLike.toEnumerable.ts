import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { IterableLike } from "../../../containers";
import { none, pipe } from "../../../functions";
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

const IterableLike__toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly iterator: Iterator<T>;
    };

    const createIterableEnumerator = createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedMutableEnumeratorMixin),
        function IteratorEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          iterator: Iterator<T>,
        ): EnumeratorLike<T> {
          init(DisposableLike__mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.iterator = iterator;

          return instance;
        },
        props<TProperties>({ iterator: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
            if (!DisposableLike__isDisposed(this)) {
              const next = this.iterator.next();

              if (!next.done) {
                this[EnumeratorLike_current] = next.value;
              } else {
                pipe(this, DisposableLike__dispose());
              }
            }
          },
        },
      ),
    );

    return () => (iterable: Iterable<T>) =>
      EnumerableLike__create(() =>
        createIterableEnumerator(iterable[Symbol.iterator]()),
      );
  })();

export default IterableLike__toEnumerable;
