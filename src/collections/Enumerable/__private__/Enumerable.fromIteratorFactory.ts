import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Factory, Function1, none, returns } from "../../../functions.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_fromIteratorFactory: <T>() => Function1<
  Factory<Iterator<T>>,
  EnumerableLike<T>
> = /*@__PURE__*/ (<T>() => {
  const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");

  type TIteratorEnumeratorProperties = {
    [IteratorEnumerator_iterator]: Iterator<T>;
  };

  const createEnumerator = mixInstanceFactory(
    include(MutableEnumeratorMixin<T>()),
    function IteratorEnumerator(
      instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
        Mutable<TIteratorEnumeratorProperties>,
      iterator: Iterator<T>,
    ): EnumeratorLike<T> {
      init(MutableEnumeratorMixin<T>(), instance);
      instance[IteratorEnumerator_iterator] = iterator;

      return instance;
    },
    props<TIteratorEnumeratorProperties>({
      [IteratorEnumerator_iterator]: none,
    }),
    {
      [EnumeratorLike_move](
        this: TIteratorEnumeratorProperties & MutableEnumeratorLike<T>,
      ) {
        if (this[MutableEnumeratorLike_reset]()) {
          return false;
        }

        const next = this[IteratorEnumerator_iterator].next();
        if (!next.done) {
          this[EnumeratorLike_current] = next.value;
        }

        this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

        return this[EnumeratorLike_hasCurrent];
      },
    },
  );

  return returns((f: Factory<Iterator<T>>) =>
    Enumerable_create(() => createEnumerator(f())),
  );
})();

export default Enumerable_fromIteratorFactory;
