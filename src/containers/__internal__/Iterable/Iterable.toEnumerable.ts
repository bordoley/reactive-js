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
import Enumerable$create from "../../../ix/__internal__/Enumerable/Enumerable.create";
import MutableEnumerator$mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";

const Iterable$toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin<T>();

    type TProperties = {
      readonly iterator: Iterator<T>;
    };

    const createIterableEnumerator = createInstanceFactory(
      mix(
        include(Disposable$mixin, typedMutableEnumeratorMixin),
        function IteratorEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          iterator: Iterator<T>,
        ): EnumeratorLike<T> {
          init(Disposable$mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.iterator = iterator;

          return instance;
        },
        props<TProperties>({ iterator: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
            if (!Disposable$isDisposed(this)) {
              const next = this.iterator.next();

              if (!next.done) {
                this[EnumeratorLike_current] = next.value;
              } else {
                pipe(this, Disposable$dispose());
              }
            }
          },
        },
      ),
    );

    return () => (iterable: Iterable<T>) =>
      Enumerable$create(() =>
        createIterableEnumerator(iterable[Symbol.iterator]()),
      );
  })();

export default Iterable$toEnumerable;
