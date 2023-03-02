import {
  FromReadonlyArray,
  FromSequence,
  IterableLike,
  ToIterable,
  ToReadonlyArray,
} from "../containers.js";
import { identity, returns } from "../functions.js";
import {
  FromEnumerable,
  ToEnumerable,
  ToObservable,
  ToRunnable,
} from "../rx.js";
import Enumerable_toIterable from "../rx/Enumerable/__internal__/Enumerable.toIterable.js";
import { ToFlowable } from "../streaming.js";
import Iterable_toFlowable from "./Iterable/__internal__/Iterable.toFlowable.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import Sequence_toIterable from "./Sequence/__internal__/Sequence.toIterable.js";

export const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"] =
  Enumerable_toIterable;

export const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromSequence: FromSequence<IterableLike>["fromSequence"] =
  Sequence_toIterable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toObservable;

export const toIterable: ToIterable<IterableLike>["toIterable"] =
  /*@__PURE__*/ returns(identity) as ToIterable<IterableLike>["toIterable"];

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
