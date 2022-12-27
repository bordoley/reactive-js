import { create as createEnumerable } from "../__internal__/ix/EnumerableLike.create";
import {
  MutableEnumeratorLike,
  mutableEnumeratorMixin,
} from "../__internal__/ix/EnumeratorLike.mutable";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/mixins";
import { IterableLike, ToIterable } from "../containers";
import { Function1, compose, identity, none, pipe } from "../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
  ToAsyncEnumerable,
  ToEnumerable,
} from "../ix";
import { fromEnumerable } from "../ix/AsyncEnumerableLike";
import { toObservable as enumerableToObservable } from "../ix/EnumerableLike";
import {
  EnumerableObservableLike,
  RunnableObservableLike,
  ToObservable,
} from "../rx";
import { dispose, isDisposed } from "../util/DisposableLike";
import DisposableLike__mixin from "../util/__internal__/DisposableLike/DisposableLike.mixin";

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  () => compose(toEnumerable(), fromEnumerable());
export const toAsyncEnumerableT: ToAsyncEnumerable<IterableLike> = {
  toAsyncEnumerable,
};

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
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
export const toEnumerableT: ToEnumerable<IterableLike> = { toEnumerable };

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;
export const toIterableT: ToIterable<IterableLike> = {
  toIterable,
};

interface IterableToObservable {
  <T>(): Function1<IterableLike<T>, EnumerableObservableLike<T>>;
  <T>(options: { delay: number; delayStart?: boolean }): Function1<
    IterableLike<T>,
    RunnableObservableLike<T>
  >;
}
export const toObservable: IterableToObservable = (options =>
  compose(
    toEnumerable(),
    enumerableToObservable(options),
  )) as IterableToObservable;
export const toObservableT: ToObservable<
  IterableLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
  }
> = { toObservable };
