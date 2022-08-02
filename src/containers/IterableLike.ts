import { disposableMixin } from "../__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/EnumeratorLikeMixin";
import {
  PropertyTypeOf,
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import { IterableLike, ToIterable } from "../containers";
import { Function1, compose, identity, none, pipe } from "../functions";
import { ToEnumerable, createEnumerable } from "../ix";
import { toObservable as enumerableToObservable } from "../ix/EnumerableLike";
import { EnumerableObservableLike, RunnableObservableLike } from "../rx";
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
      clazz(
        function IteratorEnumerator(this: TProperties, iterator: Iterator<T>) {
          init(disposableMixin, this);
          this.iterator = iterator;
        },
        { iterator: none },
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
      mixWith(disposableMixin, typedEnumeratorMixin),
      createObjectFactory<EnumeratorLike<T>, Iterator<T>>(),
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

interface ToObservable {
  <T>(): Function1<IterableLike<T>, EnumerableObservableLike<T>>;
  <T>(options?: { delay: number; delayStart?: boolean }): Function1<
    IterableLike<T>,
    RunnableObservableLike<T>
  >;
}
export const toObservable: ToObservable = <T>(options?: {
  delay: number;
  delayStart?: boolean;
}) => compose(toEnumerable<T>(), enumerableToObservable<T>(options));
