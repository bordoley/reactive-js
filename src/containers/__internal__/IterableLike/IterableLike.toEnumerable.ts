import { create as createEnumerable } from "../../../__internal__/ix/EnumerableLike.create";
import {
  MutableEnumeratorLike,
  mutableEnumeratorMixin,
} from "../../../__internal__/ix/EnumeratorLike.mutable";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
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
import { dispose, isDisposed } from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";

const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin<T>();

    type TProperties = {
      readonly iterator: Iterator<T>;
    };

    const createIterableEnumerator = createInstanceFactory(
      mixin(
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
            if (!isDisposed(this)) {
              const next = this.iterator.next();

              if (!next.done) {
                this[EnumeratorLike_current] = next.value;
              } else {
                pipe(this, dispose());
              }
            }
          },
        },
      ),
    );

    return () => (iterable: Iterable<T>) =>
      createEnumerable(() =>
        createIterableEnumerator(iterable[Symbol.iterator]()),
      );
  })();

export default toEnumerable;
