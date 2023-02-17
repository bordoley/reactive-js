import {
  Empty,
  ForEach,
  FromReadonlyArray,
  FromSequence,
  Keep,
  Map,
  ReadonlyArrayLike,
  ToIterable,
  ToReadonlyArray,
  ToSequence,
} from "../containers";
import { FromEnumerable, ToEnumerable } from "../ix";
import Enumerable_toReadonlyArray from "../ix/Enumerable/__internal__/Enumerable.toReadonlyArray";
import {
  FromEnumerableObservable,
  FromRunnableObservable,
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import RunnableObservable_toReadonlyArray from "../rx/RunnableObservable/__internal__/RunnableObservable.toReadonlyArray";
import ReadonlyArray_empty from "./ReadonlyArray/__internal__/ReadonlyArray.empty";
import ReadonlyArray_every from "./ReadonlyArray/__internal__/ReadonlyArray.every";
import ReadonlyArray_forEach from "./ReadonlyArray/__internal__/ReadonlyArray.forEach";
import ReadonlyArray_keep from "./ReadonlyArray/__internal__/ReadonlyArray.keep";
import ReadonlyArray_map from "./ReadonlyArray/__internal__/ReadonlyArray.map";
import ReadonlyArray_some from "./ReadonlyArray/__internal__/ReadonlyArray.some";
import ReadonlyArray_toEnumerable from "./ReadonlyArray/__internal__/ReadonlyArray.toEnumerable";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray";
import ReadonlyArray_toRunnable from "./ReadonlyArray/__internal__/ReadonlyArray.toRunnable";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import ReadonlyArray_toSequence from "./ReadonlyArray/__internal__/ReadonlyArray.toSequence";
import Sequence_toReadonlyArray from "./Sequence/__internal__/Sequence.toReadonlyArray";

export const empty: Empty<ReadonlyArrayLike>["empty"] = ReadonlyArray_empty;

export const every = ReadonlyArray_every;

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArray_forEach;

export const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"] =
  Enumerable_toReadonlyArray;

export const fromEnumerableObservable =
  RunnableObservable_toReadonlyArray as FromEnumerableObservable<ReadonlyArrayLike>["fromEnumerableObservable"];

export const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromRunnableObservable =
  RunnableObservable_toReadonlyArray as FromRunnableObservable<ReadonlyArrayLike>["fromRunnableObservable"];

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

export const toIterable: ToIterable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toIterable"] = ReadonlyArray_toReadonlyArray;

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
    readonly start?: number;
    readonly count?: number;
  }
>["toReadonlyArray"] = ReadonlyArray_toReadonlyArray;

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
  fromEnumerable,
  fromEnumerableObservable,
  fromReadonlyArray,
  fromSequence,
  keep,
  map,
  some,
  toEnumerable,
  toEnumerableObservable,
  toIterable,
  toObservable,
  toReadonlyArray,
  toRunnable,
  toRunnableObservable,
  toSequence,
};

export default ReadonlyArray;
