import {
  Empty,
  ForEach,
  FromArray,
  FromSequence,
  Keep,
  Map,
  ReadonlyArrayLike,
  ToReadonlyArray,
  ToSequence,
} from "../containers";
import { identity } from "../functions";
import { FromAsyncEnumerable, FromEnumerable, ToEnumerable } from "../ix";
import AsyncEnumerable_toReadonlyArray from "../ix/__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray";
import Enumerable_toReadonlyArray from "../ix/__internal__/Enumerable/Enumerable.toReadonlyArray";
import {
  FromEnumerableObservable,
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import RunnableObservable_toReadonlyArray from "../rx/__internal__/RunnableObservable/RunnableObservable.toReadonlyArray";
import ReadonlyArray_empty from "./__internal__/ReadonlyArray/ReadonlyArray.empty";
import ReadonlyArray_every from "./__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray_forEach from "./__internal__/ReadonlyArray/ReadonlyArray.forEach";
import ReadonlyArray_keep from "./__internal__/ReadonlyArray/ReadonlyArray.keep";
import ReadonlyArray_map from "./__internal__/ReadonlyArray/ReadonlyArray.map";
import ReadonlyArray_some from "./__internal__/ReadonlyArray/ReadonlyArray.some";
import ReadonlyArray_toEnumerable from "./__internal__/ReadonlyArray/ReadonlyArray.toEnumerable";
import ReadonlyArray_toRunnable from "./__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import ReadonlyArray_toRunnableObservable from "./__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import ReadonlyArray_toSequence from "./__internal__/ReadonlyArray/ReadonlyArray.toSequence";
import Sequence_toReadonlyArray from "./__internal__/Sequence/Sequence.toReadonlyArray";

export const empty: Empty<ReadonlyArrayLike>["empty"] = ReadonlyArray_empty;

export const every = ReadonlyArray_every;

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArray_forEach;

export const fromArray: FromArray<ReadonlyArrayLike>["fromArray"] =
  // FIXME: Handle options
  _options => identity;

export const fromAsyncEnumerable: FromAsyncEnumerable<ReadonlyArrayLike>["fromAsyncEnumerable"] =
  AsyncEnumerable_toReadonlyArray;

export const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"] =
  Enumerable_toReadonlyArray;

export const fromEnumerableObservable =
  RunnableObservable_toReadonlyArray as FromEnumerableObservable<ReadonlyArrayLike>["fromEnumerableObservable"];

export const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"] =
  Sequence_toReadonlyArray;

export const keep: Keep<ReadonlyArrayLike>["keep"] = ReadonlyArray_keep;

export const map: Map<ReadonlyArrayLike>["map"] = ReadonlyArray_map;

export const some = ReadonlyArray_some;

export const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = ReadonlyArray_toEnumerable;

export const toEnumerableObservable: ToEnumerableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toEnumerableObservable"] =
  ReadonlyArray_toRunnableObservable as ToEnumerableObservable<
    ReadonlyArrayLike,
    {
      readonly count?: number;
      readonly start?: number;
    }
  >["toEnumerableObservable"];

export const toObservable: ToObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toObservable"] = ReadonlyArray_toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toReadonlyArray"] = () => identity;

export const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  ReadonlyArray_toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toRunnableObservable"] = ReadonlyArray_toRunnableObservable;

export const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"] =
  ReadonlyArray_toSequence;

/** @ignore */
const ReadonlyArray = {
  empty,
  every,
  forEach,
  fromArray,
  fromAsyncEnumerable,
  fromEnumerable,
  fromEnumerableObservable,
  fromSequence,
  keep,
  map,
  some,
  toEnumerable,
  toEnumerableObservable,
  toObservable,
  toReadonlyArray,
  toRunnable,
  toRunnableObservable,
  toSequence,
};

export default ReadonlyArray;
