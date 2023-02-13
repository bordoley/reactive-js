import { IterableLike, ToIterable } from "../containers";
import { identity } from "../functions";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix";
import Enumerable_toIterable from "../ix/Enumerable/__internal__/Enumerable.toIterable";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnableObservable,
} from "../rx";

import Iterable_toAsyncEnumerable from "./Iterable/__internal__/Iterable.toAsyncEnumerable";
import Iterable_toEnumerable from "./Iterable/__internal__/Iterable.toEnumerable";
import Iterable_toEnumerableObservable from "./Iterable/__internal__/Iterable.toEnumerableObservable";
import Iterable_toRunnableObservable from "./Iterable/__internal__/Iterable.toRunnableObservable";

export const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"] =
  Enumerable_toIterable;

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
  fromEnumerable,
  toAsyncEnumerable,
  toEnumerable,
  toIterable,
  toEnumerableObservable,
  toObservable,
  toRunnableObservable,
};

export default Iterable;
