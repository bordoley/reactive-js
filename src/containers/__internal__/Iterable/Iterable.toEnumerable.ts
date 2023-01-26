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
import Enumerable_create from "../../../ix/__internal__/Enumerable/Enumerable.create";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";

const Iterable_toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();

    type TProperties = {
      readonly iterator: Iterator<T>;
    };

    const createIterableEnumerator = createInstanceFactory(
      mix(
        include(Disposable_mixin, typedMutableEnumeratorMixin),
        function IteratorEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          iterator: Iterator<T>,
        ): EnumeratorLike<T> {
          init(Disposable_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.iterator = iterator;

          return instance;
        },
        props<TProperties>({ iterator: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
            if (!Disposable_isDisposed(this)) {
              const next = this.iterator.next();

              if (!next.done) {
                this[EnumeratorLike_current] = next.value;
              } else {
                pipe(this, Disposable_dispose());
              }
            }
          },
        },
      ),
    );

    return () => (iterable: Iterable<T>) =>
      Enumerable_create(() =>
        createIterableEnumerator(iterable[Symbol.iterator]()),
      );
  })();

export default Iterable_toEnumerable;
