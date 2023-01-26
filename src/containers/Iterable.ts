import { IterableLike, ToIterable } from "../containers";
import { identity } from "../functions";
import { ToAsyncEnumerable, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnableObservable,
} from "../rx";

import Iterable$toAsyncEnumerable from "./__internal__/Iterable/Iterable.toAsyncEnumerable";
import Iterable$toEnumerable from "./__internal__/Iterable/Iterable.toEnumerable";
import Iterable$toEnumerableObservable from "./__internal__/Iterable/Iterable.toEnumerableObservable";
import Iterable$toRunnableObservable from "./__internal__/Iterable/Iterable.toRunnableObservable";
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  Iterable$toAsyncEnumerable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable$toEnumerable;

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;

export const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  Iterable$toEnumerableObservable;

export const toObservable: ToObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toObservable"] = Iterable$toRunnableObservable;

export const toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = Iterable$toRunnableObservable;
