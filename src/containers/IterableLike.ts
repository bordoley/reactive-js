import { disposableMixin } from "../__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/EnumeratorLikeMixin";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import { IterableLike, ToIterable } from "../containers";
import { identity, none, pipe } from "../functions";
import { ToEnumerable, createEnumerable } from "../ix";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../util";
import { dispose, isDisposed } from "../util/DisposableLike";

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumeratorMixin = enumeratorMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof disposableMixin, typeof typedEnumeratorMixin]
    > & {
      iterator: Iterator<T>;
    };

    const createIterableEnumerator = pipe(
      {
        [Object_properties]: { iterator: none },
        [Object_init](this: TProperties, iterator: Iterator<T>) {
          init(disposableMixin, this);
          this.iterator = iterator;
        },
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
      mixWith(disposableMixin, typedEnumeratorMixin),
      createObjectFactory<EnumeratorLike<T>, TProperties, Iterator<T>>(),
    );

    return () => (iterable: Iterable<T>) =>
      createEnumerable(() =>
        createIterableEnumerator(iterable[Symbol.iterator]()),
      );
  })();

export const toEnumerableT: ToEnumerable<IterableLike> = { toEnumerable };

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;
export const toIterableT: ToIterable<IterableLike> = {
  toIterable,
};
