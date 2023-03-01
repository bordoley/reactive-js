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
import { FromEnumerable, ToEnumerable } from "../ix.js";
import { FromRunnable, ToObservable, ToRunnable } from "../rx.js";
import Runnable_toReadonlyArray from "../rx/Runnable/__internal__/Runnable.toReadonlyArray.js";
import { ToFlowable } from "../streaming.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import ReadonlyArray_empty from "./ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_every from "./ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_getLength from "./ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "./ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import ReadonlyArray_keep from "./ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_keepType from "./ReadonlyArray/__internal__/ReadonlyArray.keepType.js";
import ReadonlyArray_map from "./ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "./ReadonlyArray/__internal__/ReadonlyArray.some.js";
import ReadonlyArray_toFlowable from "./ReadonlyArray/__internal__/ReadonlyArray.toFlowable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import ReadonlyArray_toSequence from "./ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Sequence_toReadonlyArray from "./Sequence/__internal__/Sequence.toReadonlyArray.js";

export const empty: Empty<ReadonlyArrayLike>["empty"] = ReadonlyArray_empty;

export const every: Every<ReadonlyArrayLike>["every"] = ReadonlyArray_every;

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArray_forEach;

export const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"] =
  Runnable_toReadonlyArray;

export const fromIterable: FromIterable<ReadonlyArrayLike>["fromIterable"] =
  Iterable_toReadonlyArray;

export const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromRunnable: FromRunnable<ReadonlyArrayLike>["fromRunnable"] =
  Runnable_toReadonlyArray;

export const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"] =
  Sequence_toReadonlyArray;

export const getLength = ReadonlyArray_getLength;

export const isEmpty = ReadonlyArray_isEmpty;

export const keep: Keep<ReadonlyArrayLike>["keep"] = ReadonlyArray_keep;

export const keepType: KeepType<ReadonlyArrayLike>["keepType"] =
  ReadonlyArray_keepType;

export const map: Map<ReadonlyArrayLike>["map"] = ReadonlyArray_map;

export const some: Some<ReadonlyArrayLike>["some"] = ReadonlyArray_some;

export const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = ReadonlyArray_toObservable;

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
>["toObservable"] = ReadonlyArray_toObservable;

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
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toRunnable"] = ReadonlyArray_toObservable;

export const toSequence: ToSequence<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toSequence"] = ReadonlyArray_toSequence;
