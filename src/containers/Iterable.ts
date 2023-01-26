import { IterableLike, ToIterable } from "../containers";
import { identity } from "../functions";
import { ToAsyncEnumerable, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnableObservable,
} from "../rx";

import Iterable_toAsyncEnumerable from "./__internal__/Iterable/Iterable.toAsyncEnumerable";
import Iterable_toEnumerable from "./__internal__/Iterable/Iterable.toEnumerable";
import Iterable_toEnumerableObservable from "./__internal__/Iterable/Iterable.toEnumerableObservable";
import Iterable_toRunnableObservable from "./__internal__/Iterable/Iterable.toRunnableObservable";
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  Iterable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toEnumerable;

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;

export const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  Iterable_toEnumerableObservable;

export const toObservable: ToObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toObservable"] = Iterable_toRunnableObservable;

export const toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = Iterable_toRunnableObservable;
