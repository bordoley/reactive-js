import {
  FromReadonlyArray,
  FromSequence,
  IterableLike,
  ToIterable,
  ToReadonlyArray,
} from "../containers.js";
import { identity, returns } from "../functions.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import Enumerable_toIterable from "../ix/Enumerable/__internal__/Enumerable.toIterable.js";
import {
  FromEnumerableObservable,
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx.js";
import EnumerableObservable_toIterable from "../rx/EnumerableObservable/__internal__/EnumerableObservable.toIterable.js";
import { ToFlowable } from "../streaming.js";

import Iterable_toAsyncEnumerable from "./Iterable/__internal__/Iterable.toAsyncEnumerable.js";
import Iterable_toEnumerable from "./Iterable/__internal__/Iterable.toEnumerable.js";
import Iterable_toEnumerableObservable from "./Iterable/__internal__/Iterable.toEnumerableObservable.js";
import Iterable_toFlowable from "./Iterable/__internal__/Iterable.toFlowable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import Iterable_toRunnable from "./Iterable/__internal__/Iterable.toRunnable.js";
import Iterable_toRunnableObservable from "./Iterable/__internal__/Iterable.toRunnableObservable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import Sequence_toIterable from "./Sequence/__internal__/Sequence.toIterable.js";

export const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"] =
  Enumerable_toIterable;

export const fromEnumerableObservable: FromEnumerableObservable<IterableLike>["fromEnumerableObservable"] =
  EnumerableObservable_toIterable;

export const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromSequence: FromSequence<IterableLike>["fromSequence"] =
  Sequence_toIterable;

export const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  Iterable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toEnumerable;

export const toIterable: ToIterable<IterableLike>["toIterable"] =
  /*@__PURE__*/ returns(identity) as ToIterable<IterableLike>["toIterable"];

export const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  Iterable_toEnumerableObservable;

export const toFlowable: ToFlowable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = Iterable_toFlowable;

export const toObservable: ToObservable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toObservable"] = Iterable_toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"] =
  Iterable_toReadonlyArray;

export const toRunnable: ToRunnable<IterableLike>["toRunnable"] =
  Iterable_toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] = Iterable_toRunnableObservable;
