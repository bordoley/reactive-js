import { create as createEnumerable } from "../__internal__/ix/__internal__EnumerableLike";
import { disposableMixin } from "../__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/__internal__Enumerators";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/util/__internal__Objects";
import { IterableLike, ToIterable } from "../containers";
import { Function1, compose, identity, none, pipe } from "../functions";
import { ToAsyncEnumerable, ToEnumerable } from "../ix";
import { fromEnumerable } from "../ix/AsyncEnumerableLike";
import { toObservable as enumerableToObservable } from "../ix/EnumerableLike";
import {
  EnumerableObservableLike,
  RunnableObservableLike,
  ToObservable,
} from "../rx";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../util";
import { dispose, isDisposed } from "../util/DisposableLike";

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
    const typedEnumeratorMixin = enumeratorMixin<T>();

    type TProperties = {
      readonly iterator: Iterator<T>;
    };

    const createIterableEnumerator = createInstanceFactory(
      mixin(
        include(disposableMixin, typedEnumeratorMixin),
        function IteratorEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          iterator: Iterator<T>,
        ): EnumeratorLike<T> {
          init(disposableMixin, instance);
          init(typedEnumeratorMixin, instance);

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
