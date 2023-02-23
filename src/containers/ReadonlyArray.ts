import {
  Empty,
  Every,
  ForEach,
  FromIterable,
  FromReadonlyArray,
  FromSequence,
  Keep,
  KeepType,
  Map,
  ReadonlyArrayLike,
  Some,
  ToIterable,
  ToReadonlyArray,
  ToSequence,
} from "../containers.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import Enumerable_toReadonlyArray from "../ix/Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import {
  FromEnumerableObservable,
  FromRunnableObservable,
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx.js";
import RunnableObservable_toReadonlyArray from "../rx/RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.js";
import { ToFlowable } from "../streaming.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import ReadonlyArray_empty from "./ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_every from "./ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_keep from "./ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_keepType from "./ReadonlyArray/__internal__/ReadonlyArray.keepType.js";
import ReadonlyArray_map from "./ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "./ReadonlyArray/__internal__/ReadonlyArray.some.js";
import ReadonlyArray_toAsyncEnumerable from "./ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.js";
import ReadonlyArray_toEnumerable from "./ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import ReadonlyArray_toFlowable from "./ReadonlyArray/__internal__/ReadonlyArray.toFlowable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import ReadonlyArray_toRunnable from "./ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import ReadonlyArray_toSequence from "./ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Sequence_toReadonlyArray from "./Sequence/__internal__/Sequence.toReadonlyArray.js";

export const empty: Empty<ReadonlyArrayLike>["empty"] = ReadonlyArray_empty;

export const every: Every<ReadonlyArrayLike>["every"] = ReadonlyArray_every;

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArray_forEach;

export const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"] =
  Enumerable_toReadonlyArray;

export const fromEnumerableObservable: FromEnumerableObservable<ReadonlyArrayLike>["fromEnumerableObservable"] =
  RunnableObservable_toReadonlyArray;

export const fromIterable: FromIterable<ReadonlyArrayLike>["fromIterable"] =
  Iterable_toReadonlyArray;

export const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromRunnableObservable: FromRunnableObservable<ReadonlyArrayLike>["fromRunnableObservable"] =
  RunnableObservable_toReadonlyArray;

export const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"] =
  Sequence_toReadonlyArray;

export const keep: Keep<ReadonlyArrayLike>["keep"] = ReadonlyArray_keep;

export const keepType: KeepType<ReadonlyArrayLike>["keepType"] =
  ReadonlyArray_keepType;

export const map: Map<ReadonlyArrayLike>["map"] = ReadonlyArray_map;

export const some: Some<ReadonlyArrayLike>["some"] = ReadonlyArray_some;

export const toAsyncEnumerable: ToAsyncEnumerable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  }
>["toAsyncEnumerable"] = ReadonlyArray_toAsyncEnumerable;

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

export const toFlowable: ToFlowable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = ReadonlyArray_toFlowable;

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

export const toRunnable: ToRunnable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toRunnable"] = ReadonlyArray_toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toRunnableObservable"] = ReadonlyArray_toRunnableObservable;

export const toSequence: ToSequence<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toSequence"] = ReadonlyArray_toSequence;
