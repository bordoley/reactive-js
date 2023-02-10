import { IterableLike, ToIterable } from "../containers";
import { identity } from "../functions";
import { ToAsyncEnumerable, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnableObservable,
} from "../rx";

import Iterable_toAsyncEnumerable from "./Iterable/__internal__/Iterable.toAsyncEnumerable";
import Iterable_toEnumerable from "./Iterable/__internal__/Iterable.toEnumerable";
import Iterable_toEnumerableObservable from "./Iterable/__internal__/Iterable.toEnumerableObservable";
import Iterable_toRunnableObservable from "./Iterable/__internal__/Iterable.toRunnableObservable";
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

/** @ignore */
const Iterable = {
  toAsyncEnumerable,
  toEnumerable,
  toIterable,
  toEnumerableObservable,
  toObservable,
  toRunnableObservable,
};

export default Iterable;
