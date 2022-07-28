import { prototype as disposablePrototype } from "../__internal__/util/Disposable";
import {
  MutableEnumeratorLike,
  prototype as enumeratorPrototype,
} from "../__internal__/util/Enumerator";
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
  /*@__PURE__*/ (() => {
    type TProperties = PropertyTypeOf<
      [typeof disposablePrototype, ReturnType<typeof enumeratorPrototype>]
    > & {
      iterator: Iterator<unknown>;
    };

    const createInstance = pipe(
      {
        [Object_properties]: { iterator: none },
        [Object_init](this: TProperties, iterator: Iterator<unknown>) {
          init(disposablePrototype, this);
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
      mixWith(disposablePrototype, enumeratorPrototype()),
      createObjectFactory<
        EnumeratorLike<any>,
        TProperties,
        Iterator<unknown>
      >(),
    );

    return <T>() =>
      (iterable: Iterable<T>) =>
        createEnumerable(() => createInstance(iterable[Symbol.iterator]()));
  })();

export const toEnumerableT: ToEnumerable<IterableLike> = { toEnumerable };

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;
export const toIterableT: ToIterable<IterableLike> = {
  toIterable,
};
