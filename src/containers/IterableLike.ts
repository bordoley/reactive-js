import { IterableLike, ToIterable } from "../containers";
import { identity } from "../functions";
import { ToAsyncEnumerable, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnableObservable,
} from "../rx";

import IterableLike__toAsyncEnumerable from "./__internal__/IterableLike/IterableLike.toAsyncEnumerable";
import IterableLike__toEnumerable from "./__internal__/IterableLike/IterableLike.toEnumerable";
import IterableLike__toEnumerableObservable from "./__internal__/IterableLike/IterableLike.toEnumerableObservable";
import IterableLike__toRunnableObservable from "./__internal__/IterableLike/IterableLike.toRunnableObservable";
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  IterableLike__toAsyncEnumerable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  IterableLike__toEnumerable;

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;

export const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  IterableLike__toEnumerableObservable;

export const toObservable: ToObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toObservable"] = IterableLike__toRunnableObservable;

export const toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = IterableLike__toRunnableObservable;
