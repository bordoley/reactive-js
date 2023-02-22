import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { IterableLike } from "../../../containers.js";
import { none, pipe, returns } from "../../../functions.js";
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

const Iterable_toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();

    const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");

    type TProperties = {
      readonly [IteratorEnumerator_iterator]: Iterator<T>;
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

          instance[IteratorEnumerator_iterator] = iterator;

          return instance;
        },
        props<TProperties>({ [IteratorEnumerator_iterator]: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
            if (!Disposable_isDisposed(this)) {
              const next = this[IteratorEnumerator_iterator].next();

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

    return returns((iterable: Iterable<T>) =>
      Enumerable_create(() =>
        createIterableEnumerator(iterable[Symbol.iterator]()),
      ),
    );
  })();

export default Iterable_toEnumerable;
