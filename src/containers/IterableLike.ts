import { disposableMixin } from "../__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/__internal__Enumerators";
import {
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/__internal__Objects";
import { IterableLike, ToIterable } from "../containers";
import {
  Function1,
  compose,
  identity,
  none,
  pipe,
  unsafeCast,
} from "../functions";
import { ToEnumerable, createEnumerable } from "../ix";
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

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumeratorMixin = enumeratorMixin<T>();

    type TProperties = {
      iterator: Iterator<T>;
    };

    const createIterableEnumerator = createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedEnumeratorMixin),
        function IteratorEnumerator(
          instance: unknown,
          iterator: Iterator<T>,
        ): asserts instance is EnumeratorLike<T> {
          init(disposableMixin, instance);
          unsafeCast<TProperties>(instance);

          instance.iterator = iterator;
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
