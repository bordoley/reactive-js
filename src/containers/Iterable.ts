import {
  Enumerate,
  FromReadonlyArray,
  FromSequence,
  IterableLike,
  ToIterable,
  ToReadonlyArray,
} from "../containers.js";
import { identity, returns } from "../functions.js";
import { ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_toAsyncEnumerable from "./Iterable/__internal__/Iterable.toAsyncEnumerable.js";
import Iterable_toFlowable from "./Iterable/__internal__/Iterable.toFlowable.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import Sequence_toIterable from "./Sequence/__internal__/Sequence.toIterable.js";

export const enumerate: Enumerate<IterableLike>["enumerate"] =
  Iterable_enumerate;

export const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromSequence: FromSequence<IterableLike>["fromSequence"] =
  Sequence_toIterable;

export const toAsyncEnumerable: ToAsyncEnumerable<
  IterableLike,
  { delay?: number }
>["toAsyncEnumerable"] = Iterable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toObservable;

export const toFlowable: ToFlowable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = Iterable_toFlowable;

export const toIterable: ToIterable<IterableLike>["toIterable"] =
  /*@__PURE__*/ returns(identity) as ToIterable<IterableLike>["toIterable"];

export const toObservable: ToObservable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toObservable"] = Iterable_toObservable;

export const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"] =
  Iterable_toReadonlyArray;

export const toRunnable: ToRunnable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnable"] = Iterable_toObservable;
