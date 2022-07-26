import { prototype as disposablePrototype } from "../__internal__/util/Disposable";
import {
  MutableEnumeratorLike,
  prototype as enumeratorPrototype,
} from "../__internal__/util/Enumerator";
import {
  Object_init,
  Object_properties,
  createObjectFactory,
  init,
  mix,
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
    const properties = {
      ...disposablePrototype[Object_properties],
      ...enumeratorPrototype[Object_properties],
      iterator: none as unknown as Iterator<unknown>,
    };

    const createInstance = pipe(
      mix(disposablePrototype, enumeratorPrototype, {
        [Object_properties]: properties,
        [Object_init](this: typeof properties, iterator: Iterator<unknown>) {
          init(disposablePrototype, this);
          this.iterator = iterator;
        },
        [SourceLike_move](this: typeof properties & MutableEnumeratorLike) {
          if (!isDisposed(this)) {
            const next = this.iterator.next();

            if (!next.done) {
              this[EnumeratorLike_current] = next.value;
            } else {
              pipe(this, dispose());
            }
          }
        },
      }),
      createObjectFactory<
        EnumeratorLike<any>,
        typeof properties,
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
