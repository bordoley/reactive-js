import { FromReadonlyArray, IterableLike, ToIterable } from "../containers";
import { identity, returns } from "../functions";
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
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray";

export const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"] =
  Enumerable_toIterable;

export const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  Iterable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toEnumerable;

export const toIterable: ToIterable<IterableLike>["toIterable"] =
  /*@__PURE__*/ returns(identity) as ToIterable<IterableLike>["toIterable"];

export const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  Iterable_toEnumerableObservable;

export const toObservable: ToObservable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toObservable"] = Iterable_toRunnableObservable;

export const toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] = Iterable_toRunnableObservable;

/** @ignore */
const Iterable = {
  fromEnumerable,
  fromReadonlyArray,
  toAsyncEnumerable,
  toEnumerable,
  toIterable,
  toEnumerableObservable,
  toObservable,
  toRunnableObservable,
};

export default Iterable;
